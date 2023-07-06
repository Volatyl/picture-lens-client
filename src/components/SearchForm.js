import React, { useState, useEffect } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search(searchTerm);
    setSearchTerm('');
  };

  const search = (term) => {
    // Perform the actual search logic here
    fetch(`http://127.0.0.1:5555/images?category=${term}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const fetchCategories = () => {
    // Fetch the categories from the API
    fetch('http://127.0.0.1:5555/categories')
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
