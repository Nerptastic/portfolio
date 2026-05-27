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
              <p className="my-4">I studied at <strong>The University of Akron</strong>. I work in <strong>Software Engineering</strong>.</p>
              <p className="my-4">Lately that has meant legacy modernization, cloud migrations, payment systems, internal tools, and the careful work of making old systems uhh... Not older systems anymore. Faster better stronger type of thing.</p>
              <p className="my-4">My favorite things include <strong>simplicity</strong>, <strong>automation</strong>, and <strong>maintainability</strong>.</p>
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
