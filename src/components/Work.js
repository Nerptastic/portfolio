import React from 'react';
import Cursor from './Cursor'; // Import the Cursor component

function Work() {
  return (
    <div className="Work pb-24">
        <Cursor />
        <h2 className="text-4xl font-bold my-4">Selected Work</h2>
          <div className="post-content">
              <hr />
              <p className="my-4">A few things I have worked on lately. Feel free to contact me with any specific questions.</p>
              <p className="my-4"><strong>Consolidus</strong> - Refactoring a legacy e-commerce platform from ColdFusion into a cloud-based Java and Vue architecture, with payment processing, CI/CD, Azure, SQL Server, and integrations in the mix.</p>
              <p className="my-4"><a className="underline" href="https://engineering.columbia.edu/" target="_blank" rel="noreferrer"><strong>Columbia Engineering</strong></a> - Migrated a 5,000+ page legacy CMS into an updated Drupal platform, using Python automation, QA, and content reconciliation to move the project forward cleanly.</p>
              <p className="my-4"><a className="underline" href="https://cohencpa.com/" target="_blank" rel="noreferrer"><strong>Cohen & Company</strong></a> - Built internal reporting dashboards, maintained React and TypeScript email tooling, and tuned microsite templates for better performance.</p>
              <p className="my-4"><a className="underline" href="https://teamaftermath.com/" target="_blank" rel="noreferrer"><strong>AfterMath</strong></a> - Built reusable UI components and led technical implementation for large-scale client interface improvements.</p>
              <p className="my-4"><strong>Yoder Graphics Systems</strong> - Built and maintained web applications with Vue, React, jQuery, PHP, and SQL.</p>
              <hr />
          </div>
    </div>
  );
}

export default Work;
