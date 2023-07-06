import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5555/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = (imageId) => {
    // Logic for handling the like action
    console.log('Liked image:', imageId);
    // Update the images or searchResults state to reflect the liked image
    const updatedData = searchResults.length > 0 ? [...searchResults] : [...images];
    const imageIndex = updatedData.findIndex((image) => image.id === imageId);
    if (imageIndex !== -1) {
      updatedData[imageIndex] = {
        ...updatedData[imageIndex],
        liked: !updatedData[imageIndex].liked
      };
      setSearchResults(updatedData);
    }
    const fullImageData = [...images];
    const fullImageIndex = fullImageData.findIndex((image) => image.id === imageId);
    if (fullImageIndex !== -1) {
      fullImageData[fullImageIndex] = {
        ...fullImageData[fullImageIndex],
        liked: !fullImageData[fullImageIndex].liked
      };
      setImages(fullImageData);
    }
  };

  const handleDelete = async (imageId) => {
    try {
      // Send a DELETE request to the /images/{id} endpoint
      const response = await fetch(`http://127.0.0.1:5555/images/${imageId}`, {
        method: 'DELETE',
      });

      // Check if the image was successfully deleted
      if (response.ok) {
        console.log('Image deleted successfully');
        // You can perform additional actions here, such as updating the images state or fetching the updated image list
        fetchImages();
      } else {
        console.error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="image-item-container">
      {(searchResults.length > 0 ? searchResults : images).map((image, index) => (
        <div key={index} className="image-item">
          <Link to={`/edit/${image.id}`}>
            <img src={image.url} alt={`Image ${index + 1}`} />
          </Link>
          <button
            onClick={() => handleLike(image.id)}
            className={image.liked ? 'liked' : ''}
          >
            <FontAwesomeIcon icon={faHeart} />
            Like
          </button>
          <button onClick={() => handleDelete(image.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
