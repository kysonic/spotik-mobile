import { Outlet } from 'react-router';
import './EmptyCenteredLayout.css';

export default function EmptyCenteredLayout() {
    return (
        <view className="empty-centered flex justify-center items-center">
            <Outlet />
        </view>
    );
}
