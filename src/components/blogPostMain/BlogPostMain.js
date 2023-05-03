import React, { useState } from 'react';
import '../writing/Writing.css';
const BlogPostMain = () => {
    const [text, setText] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
        setText(reader.result);
        };
    };
  return (
    <div>
        <input type="file" onChange={handleFileUpload} />
        <div className="ProseMirror blog-post-content-container" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default BlogPostMain
