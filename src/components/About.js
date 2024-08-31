import React from 'react';
import { Link } from 'react-router-dom';
import Cursor from './Cursor'; // Import the Cursor component

function About() {
  return (
    <div className="About pb-24">
        <Cursor />
        <h2 className="text-4xl font-bold my-4">About Me</h2>
          <div className="post-content">
              <hr />
              <p className="my-4"><em>Hello!</em></p>
              <p className="my-4">My name is <strong>Nicholas Paolucci</strong>, I like to make stuff.</p>
              <p className="my-4">I studied at <strong>The University of Akron</strong>. I work in <strong>Web Development</strong>.</p>
              <p className="my-4">My favorite things include <strong>simplicity</strong>, <strong>automation</strong>, <strong>usability</strong> and <strong>accessibility</strong>.</p>
              <p className="my-4">Feel free to check out <Link className="underline" to="/work"><em>my work</em></Link>.</p>
              {/* or check out my <Link className="underline" to="/blog"><em>thoughts</em></Link> */}
              <hr />
              <p className="text-right"><span><em>design, learn, refine</em></span></p>
              <hr />
          </div>
    </div>
  );
}

export default About;