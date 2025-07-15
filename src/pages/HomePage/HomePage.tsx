import { useNavigate } from 'react-router';
import { useAtom } from 'jotai';
import { counterAtom } from '@/stores/counter.js';
import './HomePage.css';

export default function HomePage() {
    const nav = useNavigate();
    const [counter, setCounter] = useAtom(counterAtom);

    return (
        <view className="home-page">
            <text>Hello HomePage!</text>
            <text className="text-6xl font-bold leading-normal underline">ReactLynx + TailwindCSS</text>
            <text style={{ marginTop: '10px' }} bindtap={() => nav('/contacts')}>
                Navigate to Contacts
            </text>
            <text style={{ marginTop: '10px' }} bindtap={() => nav('/auth/sign-in')}>
                Navigate to SignIn
            </text>
            <text style={{ marginTop: '10px' }} bindtap={() => setCounter(counter + 1)}>
                {counter}
            </text>
            <view className="grid grid-cols-3 gap-4">
                <text>01</text>
                <text>02</text>
                <text>03</text>
                <text>04</text>
                <text>05</text>
                <text>06</text>
            </view>
        </view>
    );
}
