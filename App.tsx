import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GoldListPage from './pages/GoldListPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import HowToPage from './pages/HowToPage';
import TheLabPage from './pages/TheLabPage';
import AgentDatabasePage from './pages/AgentDatabasePage';
import AgentDetailPage from './pages/AgentDetailPage';
import SocialFloater from './components/SocialFloater';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-kf-yellow selection:text-black relative">
        <Navbar />
        
        {/* Social Floating Widget (Visible on all pages) */}
        <SocialFloater />
        
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gold" element={<GoldListPage />} />
            <Route path="/gold/:id" element={<ArticleDetailPage />} />
            <Route path="/howto" element={<HowToPage />} />
            <Route path="/thelab" element={<TheLabPage />} />
            <Route path="/agent" element={<AgentDatabasePage />} />
            <Route path="/agent/:agentName" element={<AgentDetailPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;