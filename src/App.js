import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ImageList from './components/ImageList';
import ImageItem from './components/ImageItem';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import JoinPage from './components/JoinPage';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className={`app ${isScrolled ? 'fixed-header' : ''}`}>
        <Header />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageList>
                  <ImageItem />
                </ImageList>
                <Pagination />
              </>
            }
          />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
