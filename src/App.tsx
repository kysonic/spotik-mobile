import { MemoryRouter, Routes, Route } from 'react-router';
import HomePage from '@/pages/HomePage/HomePage.js';
import ContactsPage from '@/pages/ContactsPage/ContactsPage.js';
import './App.css';


export function App(props: { onMounted?: () => void }) {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
        </MemoryRouter>
    );
}
