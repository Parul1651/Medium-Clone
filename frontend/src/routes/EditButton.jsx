import React from 'react';
import axios from 'axios';

const EditButton = ({ post }) => {
  const handleEdit = async () => {
    const updatedPost = {
      ...post,
      heading: 'New heading', // Replace this with the updated heading from a form or input field
      content: 'New Content' // Replace this with the updated content from a form or input field
    };

    try {
      await axios.put(`/api/posts/${post._id}`, updatedPost);
      // Refresh the page or update the state to show the updated post
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <button onClick={handleEdit}>
      Edit
    </button>
  );
};

export default EditButton;
