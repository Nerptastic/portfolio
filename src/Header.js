import { Link } from 'react-router-dom';

function Header() {
  return (
      <header className="Header flex-initial">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="/" className="font-semibold text-xl">Nicholas Paolucci</Link>
            </div>
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/about">About</Link>
                <Link to="/misc">Misc</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </div>
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <span className="theme-toggle not-selectable">
                    <svg className="theme_toggler" width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"></path>
                    </svg>
                </span>
            </div> */}
        </nav>
      </header>
  );
}

export default Header;
