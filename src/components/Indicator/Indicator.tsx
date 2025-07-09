import './Indicator.css';

export interface IndicatorProps {
    total: number;
    current: number;
    onItemClick?: (index: number) => void;
}

export function Indicator({ total, current, onItemClick }: IndicatorProps) {
    return (
        <view className="indicator">
            {Array.from({ length: total }).map((_, index) => (
                <IndicatorItem key={index} active={index === current} onClick={onItemClick} index={index} />
            ))}
        </view>
    );
}

function IndicatorItem({
    active,
    onClick,
    index,
}: {
    active: boolean;
    onClick?: (index: number) => void;
    index: number;
}) {
    return <view className={`indicator-item ${active ? 'active' : ''}`} bindtap={() => onClick?.(index)}></view>;
}
