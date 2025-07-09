import { useState } from '@lynx-js/react';
import SwiperItem from './components/SwiperItem.js';
import { useUpdateSwiperStyle } from './useUpdateSwiperStyle.js';
import { useOffset } from './useOffset.js';
import { Indicator } from '../Indicator/Indicator.js';
import './Swiper.css';

export function Swiper({
    data,
    itemWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio,
}: {
    data: string[];
    itemWidth?: number;
}) {
    const [current, setCurrent] = useState(0);
    const { containerRef, updateSwiperStyle } = useUpdateSwiperStyle();
    const { handleTouchStart, handleTouchMove, handleTouchEnd, updateIndex } = useOffset({
        onOffsetUpdate: updateSwiperStyle,
        onIndexUpdate: setCurrent,
        itemWidth,
        duration: 300,
    });

    return (
        <view className="swiper-wrapper">
            <view
                className="swiper-container"
                main-thread:ref={containerRef}
                main-thread:bindtouchstart={handleTouchStart}
                main-thread:bindtouchmove={handleTouchMove}
                main-thread:bindtouchend={handleTouchEnd}
            >
                {data.map((pic) => (
                    <SwiperItem pic={pic} itemWidth={itemWidth} />
                ))}
            </view>
            <Indicator total={data.length} current={current} onItemClick={updateIndex} />
        </view>
    );
}
