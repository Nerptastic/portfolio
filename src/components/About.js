import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="About pb-24">
        <h2 className="text-4xl font-bold my-4">About Me</h2>
          <div className="post-content">
              <hr />
              <p className="my-4"><em>Howdy!</em></p>
              <p className="my-4">My name is <strong>Nicholas Paolucci</strong>, I like to make stuff.</p>
              <p className="my-4">I studied design and development at <strong>The University of Akron</strong>. I work in <strong>Web Development</strong>.</p>
              <p className="my-4">My favorite things include <strong>simplicity</strong>, <strong>automation</strong>, <strong>usability</strong> and <strong>accessibility</strong>.</p>
              <p className="my-4">Feel free to check out <Link className="underline" to="/work"><em>my work</em></Link> or check out the <Link className="underline" to="/other"><em>things I do for fun</em></Link>.</p>
              <hr />
              <p className="text-right"><span><em>design, learn, refine</em></span></p>
              <hr />
          </div>
    </div>
  );
}

export default About;