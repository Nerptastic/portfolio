import React from 'react';

function Resume() {
  return (
    <div className="Resume pb-24">
        <h2 className="text-4xl font-bold my-4">Resume</h2>
        <div className="post-content">
          <hr />
          <p className="my-2"><a href="mailto:nichopaolucci@gmail.com">Email</a> | <a href="https://linkedin.com/in/nichopaolucci" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/nerptastic" target="_blank" rel="noreferrer">GitHub</a></p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Education</strong></h4>
          <p className="my-2"><em>BFA, Graphic Design,</em> <strong>The University of Akron</strong>, 2021</p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Work Experience</strong></h4>
          <p className="my-4">Web Developer (Contract), <strong>Columbia University</strong> (<em>January 2024–Present</em>)</p>
          <p className="my-4">Web Developer, <strong>Cohen & Company</strong> (<em>May 2022–October 2023</em>)</p>
          <p className="my-4">Jr. Web Developer / Designer, <strong>AfterMath, Inc.</strong> (<em>May 2021–May 2022</em>)</p>
          <p className="my-4">Web Developer Intern, <strong>Yoder Graphics Systems, Inc.</strong> (<em>December 2019–May 2021</em>)</p>
          <hr />
          <h4 className="my-2 text-xl"><strong>Technologies</strong></h4>
          <p className="my-4"><em>Technologies:</em> React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Node.js, Express.js, MongoDB,
                                                      SQL, Git, Webpack, Jest, ESLint, RESTful APIs, Adobe Creative Suite, Figma</p>
          <p className="my-4"><em>Skills:</em> Technical Writing, CI/CD, Agile Methodologies, SEO, UI/UX Design, Wireframing, Prototyping</p>
          <p className="my-4"><em>Interests:</em> Home Servers, Raspberry Pi, Guitar, Piano, Motorcycles, Powerlifting, Tattoos, Reading</p>
        </div>
        <hr />
        <p className="text-right"><span><em>design, learn, refine</em></span></p>
        <hr />
    </div>
  );
}

export default Resume;



