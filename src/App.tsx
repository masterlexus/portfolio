import { Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import ScrollProgress from './components/ui/ScrollProgress';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-bgPrimary text-textPrimary">
      <ScrollProgress />
      <Header />
      <div className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
