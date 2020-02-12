function Header() {
  const view = `
    <div className="header__main">
      <div className="header__logo">
        <h1>
          <a href="/">
            100tifi.co
          </a>
        </h1>
      </div>
      <nav className="header__nav">
        <a href="#/about">
          About
        </a>
      </nav>
    </div>
  `

  return view
}

export default Header
