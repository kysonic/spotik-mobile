import { useRef } from '@lynx-js/react';
import type { NodesRef } from '@lynx-js/types';
import SwiperItem from './components/SwiperItem.js';
import './Swiper.css';

export function Swiper({
    data,
    itemWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio,
}: {
    data: string[];
    itemWidth?: number;
}) {
    const containerRef = useRef<NodesRef>(null);
    const currentOffsetRef = useRef<number>(0);
    const touchStartXRef = useRef<number>(0);
    const touchStartCurrentOffsetRef = useRef<number>(0);

    function updateSwiperOffset(offset: number) {
        currentOffsetRef.current = offset;
        containerRef.current
            ?.setNativeProps({
                transform: `translateX(${offset}px)`,
            })
            .exec();
    }

    function handleTouchStart(e: any) {
        touchStartXRef.current = e.touches[0].clientX;
        touchStartCurrentOffsetRef.current = currentOffsetRef.current;
    }

    function handleTouchMove(e: any) {
        const delta = e.touches[0].clientX - touchStartXRef.current;
        const offset = touchStartCurrentOffsetRef.current + delta;

        updateSwiperOffset(offset);
    }

    function handleTouchEnd(e: any) {
        touchStartXRef.current = 0;
        touchStartCurrentOffsetRef.current = 0;
    }

    return (
        <view className="swiper-wrapper">
            <view
                className="swiper-container"
                ref={containerRef}
                bindtouchstart={handleTouchStart}
                bindtouchmove={handleTouchMove}
                bindtouchend={handleTouchEnd}
            >
                {data.map((pic) => (
                    <SwiperItem pic={pic} itemWidth={itemWidth} />
                ))}
            </view>
        </view>
    );
}
