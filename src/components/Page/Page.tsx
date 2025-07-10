import type { ReactNode } from '@lynx-js/react';
import type { CSSProperties } from '@lynx-js/types';
import favoriteIcon from '../../assets/whiteHeart.png';
import SafeArea from '../SafeArea/SafeArea.js';
import './Page.css';

export interface PageProps { 
  children: ReactNode; 
  title?: string; 
  style?: CSSProperties
}

export function Page({ children, title, style }: PageProps) {
    const onOrderTap = () => {
        console.log('Debug!');
    }
    return (
        <SafeArea style={style}>
            <view className="page-container">
                {children}
                <view className="card-detail-container">
                    <view className="card-detail">
                        <view className="card-detail-title">
                            <text className="card-detail-title-price">￥1314</text>
                            <text className="card-detail-amount">Sold 1000+</text>
                        </view>
                        <view className="card-detail-desc">
                            <text className="card-detail-desc-text">Single leather seat</text>
                            <image
                                mode="aspectFill"
                                className="favorite-icon"
                                src={favoriteIcon}
                                style={{ width: '20px', height: '20px' }}
                            />
                        </view>
                    </view>
                </view>
                <view className="order-button" bindtap={onOrderTap}>
                    <text className="order-text">Order Now</text>
                </view>
            </view>
        </SafeArea>
    );
}
