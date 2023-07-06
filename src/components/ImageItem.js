// import React from 'react';

// const ImageItem = () => {
//   return (
//     <div className="image-item">
//       {/* Your image item code goes here */}
//     </div>
//   );
// };

// export default ImageItem;

import React, { useEffect, useState } from 'react';

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

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageItem;
