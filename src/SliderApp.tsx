import { Page } from './components/Page/Page.js';
import { Swiper } from './components/Swiper/Swiper.js';
import { picsArr } from './utils/pics.js';
import './App.css';

export function App(props: { onMounted?: () => void }) {
    return (
        <Page>
            <Swiper data={picsArr} />
        </Page>
    );
}
