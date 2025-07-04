import Gallery from './components/Gallery/Gallery.js';
import { furnituresPictures } from './data/furnituresPictures.js';
import './App.css';

export function App(props: { onMounted?: () => void }) {
    return <Gallery pictureData={furnituresPictures} />;
}
