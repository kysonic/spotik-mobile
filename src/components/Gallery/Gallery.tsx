import { useRef, useEffect } from '@lynx-js/react';
import type { NodesRef, ScrollEvent } from '@lynx-js/types';
import type { Picture } from '../../entities/Picture.js';
import { calculateEstimatedSize } from '../../utils/index.js';
import ImageCard from '../ImageCard/ImageCard.js';
import { NiceScrollbar, type NiceScrollbarRef } from '../NiceScrollbar/NiceScrollbar.js';
import './Gallery.css';

export type GalleryProps = { pictureData: Picture[] };

export default function Gallery({ pictureData }: GalleryProps) {
    const galleryRef = useRef<NodesRef>(null);
    const scrollbarRef = useRef<NiceScrollbarRef>(null);

    useEffect(() => {
        galleryRef.current
            ?.invoke({
                method: 'autoScroll',
                params: {
                    rate: '60',
                    start: true,
                },
            })
            .exec();
    }, []);

    const onScroll = (event: ScrollEvent) => {
        scrollbarRef.current?.adjustScrollbar(event.detail.scrollTop, event.detail.scrollHeight);
    };

    return (
        <view className="gallery-wrapper">
            <NiceScrollbar ref={scrollbarRef} />
            <list
                ref={galleryRef}
                className="list"
                list-type="waterfall"
                column-count={2}
                scroll-orientation="vertical"
                custom-list-name="list-container"
                bindscroll={onScroll}
            >
                {pictureData.map((picture: Picture, index: number) => (
                    <list-item
                        estimated-main-axis-size-px={calculateEstimatedSize(picture.width, picture.height)}
                        item-key={'' + index}
                        key={'' + index}
                    >
                        <ImageCard picture={picture} />
                    </list-item>
                ))}
            </list>
        </view>
    );
}
