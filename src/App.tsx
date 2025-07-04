import ImageCard from './components/ImageCard/ImageCard.jsx';
import './App.css';

export function App(props: { onMounted?: () => void }) {
    return (
        <view>
            <text style={{ marginTop: 100 }}>12223</text>
            <ImageCard picture={{ width: 100, height: 100, src: '/assets/furniture/room2.jpg' }} />
        </view>
    );
}
