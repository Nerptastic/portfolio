import { Link } from 'react-router-dom';

function toggleMenu() {
    console.log("Displaying Menu");
    var mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")){
        mobileMenu.classList.remove("hidden")
    } else {
        mobileMenu.classList.add("hidden")
    }
}

function Header() {
  return (
      <header className="Header flex-initial">
        <nav className="mx-auto flex max-w-7xl justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="/" className="font-semibold text-xl">Nicholas Paolucci</Link>
            </div>
            <div className="lg:hidden text-right">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#222" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <div id="mobileMenu" className="hidden max-w-7xl p-2 lg:px-2 lg:hidden">
                    <ul className="text-right underline">
                        <li className="mobile-menu text-xl" onClick={toggleMenu}><Link to="/about">About</Link></li>
                        <li className="mobile-menu text-xl" onClick={toggleMenu}><Link to="/projects">Projects</Link></li>
                        <li className="mobile-menu text-xl" onClick={toggleMenu}><Link to="/fun">Fun</Link></li>
                        <li className="mobile-menu text-xl" onClick={toggleMenu}><Link to="/resume">Resume</Link></li>
                    </ul>
                </div>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/fun">Fun</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>

      </header>
  );
}

export default Header;
