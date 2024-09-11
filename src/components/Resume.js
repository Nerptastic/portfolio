import React from 'react';
import Cursor from './Cursor';

function Resume() {
  return (
    <div className="Resume pb-24">
        <Cursor />
        <h2 className="text-4xl font-bold my-4">Resume</h2>
        <div className="post-content">
          <hr />
          <p className="my-2"><a className="underline" href="mailto:nichopaolucci@gmail.com">Email</a> | <a href="https://linkedin.com/in/nichopaolucci" target="_blank" rel="noreferrer" className="underline">LinkedIn</a> | <a className="underline" href="https://github.com/nerptastic" target="_blank" rel="noreferrer">GitHub</a></p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Work Experience</strong></h4>
          <p className="my-4">Data Migration Specialist (Contract), <strong>Columbia University</strong> (<em>January 2024–Present</em>)</p>
          <p className="my-4">Web Developer / Designer, <strong>Cohen & Company</strong> (<em>May 2022–October 2023</em>)</p>
          <p className="my-4">Web Developer / Art Director, <strong>AfterMath, Inc.</strong> (<em>May 2021–May 2022</em>)</p>
          <p className="my-4">Web Developer, <strong>Yoder Graphics Systems, Inc.</strong> (<em>December 2019–May 2021</em>)</p>
          <p className="my-4">Junior Web Developer, <strong>TRIAD Communications</strong> (<em>July 2019–December 2019</em>)</p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Education</strong></h4>
          <p className="my-2"><em>Bachelor's, Graphic Design,</em> <strong>The University of Akron</strong>, 2021</p>
          <hr />
          <hr />
          <h4 className="my-2 text-xl"><strong>Languages, Technologies, Skills & Interests</strong></h4>
          <p className="my-4"><em>Languages:</em> JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SQL, PHP</p>
          <p className="my-4"><em>Technologies:</em> React, Next.js, Vue.js, Nuxt.js, Node.js, Express.js, WordPress, Drupal</p>
          <p className="my-4"><em>Skills:</em> Responsive Design, Web Performance Optimization, UI/UX Design, Agile Development, Technical Writing</p>
          <p className="my-4"><em>Interests:</em> Home Servers, Raspberry Pi, Motorcycles, Guitar, Piano, Running, Powerlifting</p>
        </div>
        <hr />
        <p className="text-right"><span><em>design, learn, refine</em></span></p>
        <hr />
    </div>
  );
}

export default Resume;



