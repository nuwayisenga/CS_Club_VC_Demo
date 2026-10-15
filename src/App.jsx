function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Computer Science Club home">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>CS CLUB</span>
        </a>
        <span className="status-pill"><span className="status-dot" /> Spring 2026</span>
      </header>

      <section className="hero" aria-labelledby="welcome-heading">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Campus community / 01</p>
          <h1 id="welcome-heading">Welcome to the <em>Computer Science Club.</em></h1>
          <p className="intro">
            A place to build boldly, learn together, and turn curious questions into real things.
          </p>
          <a className="primary-link" href="#about">
            Explore our club <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-art" aria-label="Abstract green computer science club graphic">
          <div className="art-grid" />
          <div className="art-frame art-frame-back" />
          <div className="art-frame art-frame-front">
            <div className="terminal-bar"><span /><span /><span /></div>
            <div className="terminal-code">
              <p><span className="code-muted">01</span> <b>const</b> <strong>club</strong> = {'{'}</p>
              <p className="code-indent"><span className="code-muted">02</span> mission: <i>&apos;make + share&apos;</i>,</p>
              <p className="code-indent"><span className="code-muted">03</span> people: <i>&apos;curious minds&apos;</i>,</p>
              <p><span className="code-muted">04</span> {'}'}</p>
              <p className="code-cursor"><span className="code-muted">05</span> <span /></p>
            </div>
          </div>
          <span className="art-label">est. 2026</span>
        </div>
      </section>

      <section className="club-strip" id="about" aria-label="About the club">
        <div className="strip-intro">
          <span className="strip-number">02</span>
          <h2>Find your people.</h2>
        </div>
        <p>Whether you are writing your first line of code or shipping your next big idea, there is a seat here for you.</p>
        <div className="strip-tags" aria-label="Club activities">
          <span>Build</span><span>Learn</span><span>Connect</span>
        </div>
      </section>

      <footer className="footer">
        <span>Computer Science Club</span>
        <span className="footer-rule" />
        <span>Make something that matters.</span>
      </footer>
    </main>
  )
}

export default App