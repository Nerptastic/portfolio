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
          <p className="my-4">Software Engineer, <strong>Consolidus</strong> (<em>November 2024–Present</em>)</p>
          <p className="my-4">Data Migration Specialist (Contract), <strong>Columbia University</strong> (<em>January 2024–October 2024</em>)</p>
          <p className="my-4">Web Developer, <strong>Cohen & Company</strong> (<em>May 2022–October 2023</em>)</p>
          <p className="my-4">Web Developer / UX Designer, <strong>AfterMath, Inc.</strong> (<em>May 2021–May 2022</em>)</p>
          <p className="my-4">Web Developer, <strong>Yoder Graphics Systems, Inc.</strong> (<em>December 2018–May 2021</em>)</p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Education</strong></h4>
          <p className="my-2"><em>Bachelor's, Graphic Design,</em> <strong>The University of Akron</strong>, 2021</p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Languages, Technologies, Skills & Interests</strong></h4>
          <p className="my-4"><em>Languages:</em> Java, Python, JavaScript, TypeScript, SQL, HTML5, CSS3</p>
          <p className="my-4"><em>Technologies:</em> Vue.js, React, Node.js, Spring Boot, Azure, SQL Server, Docker, GitHub Actions, Drupal</p>
          <p className="my-4"><em>Skills:</em> System Design, Performance Optimization, API Integrations, CI/CD, UI/UX, Automation</p>
          <p className="my-4"><em>Interests:</em> Home Servers, Raspberry Pi, Motorcycles, Guitar, Piano, Running, Powerlifting</p>
        </div>
        <hr />
        <p className="text-right"><span><em>design, learn, refine</em></span></p>
        <hr />
    </div>
  );
}

export default Resume;


