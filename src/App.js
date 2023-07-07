import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; // Import the Hero component
import ImageList from './components/ImageList';
import ImageItem from './components/ImageItem';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import JoinPage from './components/JoinPage';
import LoginPage from './components/LoginPage';
import UploadPage from './components/UploadPage';
import EditPage from './components/EditPage';

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

        <Hero
          backgroundImage="url(https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=612x612&w=0&k=20&c=xwCQ441cTHFBTZpb8ihvVwqqtTZjmees1C3xdJc_nfw=)"
          title="Welcome to PictureLens"
          subtitle="Discover stunning images from around the world"
          buttonText="Get Started"
          buttonLink="/join"
        />

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
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
