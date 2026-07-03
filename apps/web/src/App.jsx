import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
                </Routes>
            </Router>
        </LanguageProvider>
    );
}

export default App;
