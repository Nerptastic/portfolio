import React from 'react';
import BlogPost from './BlogPost';

const markdownFiles = require.context('../blog', false, /\.md$/);

function Blog() {
  const blogPosts = markdownFiles.keys();

  return (
    <div className="blog-container pb-24">
      <h2 className="text-4xl font-bold my-4">Blog Posts</h2>
      <div className="post-content">
        <hr className="mb-4" />
        {blogPosts.map((fileName, index) => (
          <div key={index} className="blog-entry my-8">
            <BlogPost 
              fileName={fileName.replace('./', '')} 
              displayFullContent={false} 
            />
            <hr className="mt-4" />
          </div>
        ))}
      </div>
      <hr />
      <p className="text-right"><span><em>design, learn, refine</em></span></p>
      <hr />
    </div>
  );
}

export default Blog;
