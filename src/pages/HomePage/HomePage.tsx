import { useNavigate } from 'react-router';
import './HomePage.css';

export default function HomePage() {
    const nav = useNavigate();

    return (
        <view className="home-page">
            <text>Hello HomePage!</text>
            <text bindtap={() => nav('/contacts')}>Navigate to Contacts</text>
        </view>
    );
}
