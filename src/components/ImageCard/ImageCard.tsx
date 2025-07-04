import type { Picture } from '../../entities/Picture.js';
import './ImageCard.css';

export type ImageCardProps = { picture: Picture };

export default function ImageCard({ picture }: ImageCardProps) {
    return (
        <view className="picture-wrapper">
            <image
                className="image"
                style={{ width: '100%', aspectRatio: picture.width / picture.height }}
                src={picture.src}
            />
        </view>
    );
}
