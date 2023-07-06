import React, { useState } from 'react';

const UploadPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCategories(selectedOptions);
  };

  const handleUpload = () => {
    const image = {
      url: imageUrl,
      price: parseInt(price),
      categories: selectedCategories
    };

    // Perform image upload logic using fetch
    // Replace the dummy URL with your actual API endpoint for image upload
    fetch('http://127.0.0.1:5555/add_image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });

    // Reset the form fields
    setImageUrl('');
    setPrice('');
    setSelectedCategories([]);
  };

  // Define the categories array based on the provided list
  const categories = [
    'Nature',
    'Water',
    'Land',
    'Cars',
    'Abstract',
    'Sunset'
  ];

  return (
    <div className="upload-page">
      <h2>Upload Page</h2>
      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <label htmlFor="categories">Categories</label>
        <select
          multiple
          id="categories"
          value={selectedCategories}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleUpload} className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default UploadPage;
