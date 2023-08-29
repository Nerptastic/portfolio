import { Link } from 'react-router-dom';

function Fun() {
  return (
    <div className="Misc pb-24">
        <h2 className="text-4xl font-bold my-4">Fun Stuff!</h2>
          <div class="post-content">
              <hr />
              <p className="my-4">I enjoy wrenching on my <strong>08 Honda Nighthawk</strong> and cursing at my <strong>05 Camry</strong>.</p>
              <p className="my-4">I'm a big fan of <strong>music</strong>. I play <strong>guitar</strong> and <strong>keyboard</strong>.</p>
              <p className="my-4">I'm proud of my lifting PRs:</p>
              <table className="border border-current">
                <tr>
                <th className="border border-current text-center px-2">Squat</th>
                <th className="border border-current text-center px-2">Deadlift</th>
                <th className="border border-current text-center px-2">Bench Press</th>
                </tr>
                <tr>
                  <td className="border border-current text-center">315</td>
                  <td className="border border-current text-center">405</td>
                  <td className="border border-current text-center">225</td>
                </tr>
              </table>
              <p className="my-4">Feel free to check out <Link className="underline" to="/projects"><em>my past projects</em></Link>.</p>
              <hr />
              <p><em></em></p><div className="text-right"><em>design, learn, refine</em></div><p></p>
              <hr />
          </div>
    </div>
  );
}

export default Fun;