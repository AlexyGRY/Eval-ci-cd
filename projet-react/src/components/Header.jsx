function Header() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#about">
        <span className="monogram" aria-hidden="true">
          CD
        </span>
        Camille Dubois
      </a>
      <nav>
        <a href="#about">A propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
