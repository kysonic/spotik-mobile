import { Page } from './components/Page/Page.js';
import './App.css';

export function App(props: { onMounted?: () => void }) {
    return (
        <Page>
            <text>Hello Swiper</text>
        </Page>
    );
}
