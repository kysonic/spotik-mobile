import { MemoryRouter, Routes, Route } from 'react-router';
import { Provider } from 'jotai';
import HomePage from '@/pages/HomePage/HomePage.js';
import ContactsPage from '@/pages/ContactsPage/ContactsPage.js';
import SignInPage from '@/pages/SignInPage/SignInPage.js';
import EmptyCenteredLayout from '@/components/layouts/EmptyCentered/EmptyCenteredLayout.js';
import './App.css';

export function App(props: { onMounted?: () => void }) {
    return (
        <Provider>
            <MemoryRouter>
                <Routes>
                    <Route path="/auth" element={<EmptyCenteredLayout />}>
                        <Route path="sign-in" element={<SignInPage />} />
                    </Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<ContactsPage />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
}
