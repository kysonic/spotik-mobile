import './SwiperItem.css';

export interface SwiperItemProps {
    pic: string;
    itemWidth: number;
}

export default function SwiperItem({ pic, itemWidth }: SwiperItemProps) {
    return (
        <view style={{ width: `${itemWidth}px`, height: `100%` }}>
            <image mode="aspectFill" src={pic} style={{ width: '100%', height: '100%' }}></image>
        </view>
    );
}
