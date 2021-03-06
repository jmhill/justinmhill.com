const React = require('react');

const NavBar = props => (
  <div className="sidebar pure-u-1 pure-u-md-1-4">
    <header className="header">
      <h1 className="brand-title"><a href="/">Justin Hill</a></h1>
      <h2 className="brand-tagline">A blog and portfolio site focusing on technology, web development, and education.</h2>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/about" className="pure-button">About</a></li>
          <li className="nav-item"><a href="/blog" className="pure-button">Blog</a></li>
          <li className="nav-item"><a href="/contact" className="pure-button">Contact</a></li>
          <li className="nav-item"><a href="/projects" className="pure-button">Projects</a></li>
        </ul>
      </nav>
    </header>
  </div>
);

module.exports = NavBar;
