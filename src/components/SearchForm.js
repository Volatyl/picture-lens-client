import React, { useState } from 'react';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search functionality or any other action with the search term
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };

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
