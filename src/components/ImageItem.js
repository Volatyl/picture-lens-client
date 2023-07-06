import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ImageItem = () => {
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
  };

  return (
    <div className="image-item-container"> {/* Add a container div */}
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <Link to={`/edit/${image.id}`}>
            <img src={image.url} alt={`Image ${index + 1}`} />
          </Link>
          <button onClick={() => handleLike(image.id)}>Like</button>
        </div>
      ))}
    </div>
  );
};

export default ImageItem;
