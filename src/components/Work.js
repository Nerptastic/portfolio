import React from 'react';
import Cursor from './Cursor'; // Import the Cursor component

function Work() {
  return (
    <div className="Work pb-24">
        <Cursor />
        <h2 className="text-4xl font-bold my-4">Past Work</h2>
          <div className="post-content">
              <hr />
              <p className="my-4">You can view some of my <strong>professional</strong> work here. Feel free to ontact me with any specific questions! </p>
              <p className="my-4"><a className="underline" href="https://engineering.columbia.edu/" target="_blank" rel="noreferrer"><strong>Columbia Engineering</strong></a> - Strategized the migration of a 5000+ page behemoth of a CMS to a new platform, designing and developing along the way.</p>
              <p className="my-4"><a className="underline" href="https://cohencpa.com/" target="_blank" rel="noreferrer"><strong>Cohen & Company</strong></a> - Worked with a team of developers to build the company site.</p>
              <p className="my-4"><a className="underline" href="https://web.archive.org/web/20230628075943/https://www.goodyeartrucktires.com/total-mobility/" target="_blank" rel="noreferrer"><strong>Goodyear</strong></a> - Developed + designed the "Total Mobility" section of the site.</p>
              <p className="my-4"><a className="underline" href="https://teamaftermath.com/" target="_blank" rel="noreferrer"><strong>AfterMath</strong></a> - Developed + designed the company site.</p>
              <p className="my-4"><a className="underline" href="https://www.bawls.com/" target="_blank" rel="noreferrer"><strong>Bawls Guarana</strong></a> - Developed the home page + information pages for the gamer drink.</p>
              <p className="my-4"><a className="underline" href="https://www.bdmorganfdn.org/2018-annual-report/" target="_blank" rel="noreferrer"><strong>BDM Microsite</strong></a> - Developed a microsite for the foundation's annual report.</p>
              <p className="my-4"><a className="underline" href="https://www.neoship.org/" target="_blank" rel="noreferrer"><strong>SHIP Website</strong></a> - Developed a Drupal CMS site for Triad's "Design for Good" campaign.</p>
              <hr />
          </div>
        
        <h2 className="text-4xl font-bold my-4">Personal Work</h2>
          <div className="post-content">
                <hr />
                <p className="my-4">These are <strong>Under Construction</strong>, wear your hard hats!</p>
                <p className="my-4"><a className="underline" href="https://helpher.io/" target="_blank" rel="noreferrer"><strong>HelpHer.io</strong></a> - I'm working on a helpful resource for women.</p>
                <p className="my-4"><a className="underline" href="https://fourpointfour.com" target="_blank" rel="noreferrer"><strong>FourPointFour</strong></a> - I made this site for an LLC I occasionally work under.</p>
                <p className="my-4"><a className="underline" href="https://national-parks-delta.vercel.app/" target="_blank" rel="noreferrer"><strong>National Park Info</strong></a> - A little hobby page that pulls data from the National Park API.</p>
                <p className="my-4"><a className="underline" href="https://github.com/Nerptastic/EZCSS" target="_blank" rel="noreferrer"><strong>EZCSS</strong></a> - I use this CSS for spinning up smaller sites.</p>
                
                <hr />
          </div>
              <p className="text-right"><span><em>design, learn, refine</em></span></p>
              <hr />

    </div>
  );
}

export default Work;