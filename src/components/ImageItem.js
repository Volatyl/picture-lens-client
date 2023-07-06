import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/images');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleLike = (imageId) => {
    // Logic for handling the like action
    console.log('Liked image:', imageId);
    // Update the images state to reflect the liked image
    setImages((prevImages) => {
      return prevImages.map((image) => {
        if (image.id === imageId) {
          return { ...image, liked: !image.liked };
        }
        return image;
      });
    });
  };

  return (
    <div className="image-item-container">
      {images.map((image, index) => (
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
        </div>
      ))}
    </div>
  );
};

export default ImageList;
