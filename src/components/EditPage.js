import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditPage = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState(null);
  const [commentText, setCommentText] = useState('');

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

  const handleDownload = async () => {
    try {
      const response = await fetch(imageData.url);
      const blob = await response.blob();
  
      // Create a temporary URL for the blob
      const url = URL.createObjectURL(blob);
  
      // Create a download link and simulate a click event
      const link = document.createElement('a');
      link.href = url;
      link.download = imageData.title; // Set the desired filename for the downloaded image
      link.click();
  
      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  const handleComment = async () => {
    try {
      // Prepare the comment data
      const commentData = {
        comment: commentText, // Use the commentText state value
        user_id: 'user_id_goes_here', // Replace with the actual user ID
        image_id: imageData.id, // Assuming `imageData` has an `id` property
      };
  
      // Send a POST request to the /comment endpoint
      const response = await fetch('http://127.0.0.1:5555/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
  
      // Check if the comment was successfully added
      if (response.ok) {
        console.log('Comment added successfully');
        // You can perform additional actions here, such as refreshing the comments list or clearing the comment input
      } else {
        console.error('Failed to add comment');
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  
  const handleEdit = () => {
    // ... (existing code for editing the image)
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
        <button onClick={handleEdit}>Edit</button>
      </div>

      <div className="comments">
        <h3>Comments</h3>
        {/* Render the list of comments */}
        {/* {imageData.comments.map((comment) => (
          <div key={comment.id}>{comment.text}</div>
        ))} */}

        {/* Comment form */}
        <form onSubmit={handleComment}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment..."
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
