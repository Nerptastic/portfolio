import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fm from 'front-matter';

const markdownFiles = require.context('../blog', false, /\.md$/);

function BlogPost({ fileName, displayFullContent }) {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    const loadMarkdownFile = async () => {
      const filePath = markdownFiles(`./${fileName}`);
      const response = await fetch(filePath);
      const text = await response.text();
      const { attributes, body } = fm(text);
      setMetadata(attributes);
      setContent(body);
    };

    loadMarkdownFile();
  }, [fileName]);

  if (!metadata.title) return null; // Handle loading state or empty data gracefully

  return (
    <div className="blog-post">
      {displayFullContent ? (
        <>
          {/* Full content mode */}
          <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
          <p className="text-gray-600 mb-4">{metadata.date}</p>
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </>
      ) : (
        <>
          {/* Preview mode (excerpts) */}
          {/* Link only wraps the title now */}
          <Link to={`/blog/${fileName.replace('.md', '')}`} className="text-2xl font-bold hover:underline">
            {metadata.title}
          </Link>
          {/* Date and excerpt formatted differently underneath */}
          <p className="text-sm text-gray-600 mt-2">{metadata.date}</p>
          <p className="text-base text-gray-800 mt-2">{metadata.excerpt}</p>
        </>
      )}
    </div>
  );
}

export default BlogPost;
