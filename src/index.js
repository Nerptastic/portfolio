import React from 'react';
import ReactDOM from 'react-dom/client'; // Added import
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'; // Added useParams import
import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost'; // Import BlogPost component
import Work from './components/Work';
import Resume from './components/Resume';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="container mx-auto app-container">
        <Header />
        <div className="MainContent w-full mx-auto max-w-7xl p-6 lg:px-8 flex-1 flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
            {/* Dynamic blog post route */}
            <Route path="/blog/:postSlug" element={<BlogPostRoute />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function BlogPostRoute() {
  const { postSlug } = useParams();
  return <BlogPost fileName={`${postSlug}.md`} displayFullContent={true} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
