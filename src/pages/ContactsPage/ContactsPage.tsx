import { useNavigate } from 'react-router';
import './ContactsPage.css';

export default function ContactsPage() {
    const nav = useNavigate();

    return (
        <view className="contacts-page">
            <text>Hello Contacts Page</text>
            <text bindtap={() => nav('/')}>Navigate to Home</text>
        </view>
    );
}
