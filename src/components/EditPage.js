import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5555/images/${id}`);
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageData();
  }, [id]);

  const handleDownload = () => {
    // Placeholder logic for downloading the image
    console.log('Download image:', imageData);
  };

  const handleComment = () => {
    // Placeholder logic for adding comments
    console.log('Add comment:', imageData);
  };

  const handleEdit = () => {
    // Placeholder logic for editing the image
    console.log('Edit image:', imageData);
  };

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-page">
      <h2>Edit Image</h2>
      <img src={imageData.url} alt={imageData.title} />

      <div className="image-details">
        <h3>{imageData.title}</h3>
        <p>{imageData.description}</p>
        <p>Author: {imageData.author}</p>
      </div>

      <div className="actions">
        <button onClick={handleDownload}>Download</button>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleEdit}>Edit</button>
      </div>

      <div className="comments">
        <h3>Comments</h3>
        {/* Render the list of comments */}
        {/* {imageData.comments.map((comment) => (
          <div key={comment.id}>{comment.text}</div>
        ))} */}
      </div>
    </div>
  );
};

export default EditPage;
