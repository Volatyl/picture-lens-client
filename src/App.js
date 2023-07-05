import React from 'react';
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
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
        
          <Route path="/" element={
            <>
              <SearchForm />
              <ImageList>
                <ImageItem />
              </ImageList>
              <Pagination />
            </>
          } />
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
