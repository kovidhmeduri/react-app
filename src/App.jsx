import './App.css';

function App() {
  return (
    <div className="container">
      <div className="ns-header">
        <div className="ns-left-section">
          <a href="/" className="ns-link">
            Mode
          </a>
          <a href="/" className="ns-link">
            Features
          </a>
          <a href="/" className="ns-link">
            Pricing
          </a>
          <a href="/" className="ns-link">
            FAQ
          </a>
        </div>
        <div className="ns-right-section">
          <button className="ns-black-btn">Sign in</button>
          <button className="ns-pink-btn">Sign up</button>
        </div>
      </div>

      <div className="heading">
        <h1 className="issuetracking">Issue tracking</h1>
        <h2 className="simplified">simplified.</h2>
        <p className="subheading">
          A minimal and elegant issue tracking tool for modern teams. Manage your projects with
          ease.
        </p>
        <div className="gap">
          <a href="/signup">
            <button className="get-started-btn">Get Started</button>
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-c1">
          <div className="footer-c2">
            <p>© 2025 Mode. Built for Next.js Fundamentals.</p>
          </div>
        </div>
      </footer>

      <footer className="footer2">
        <div className="gap2">
          <div className="blocks">
            <div>
              <h3>Mode</h3>
              <p className="modetext">A modern project management tool built with Next.js.</p>
            </div>
            <div>
              <h3>Product</h3>
              <ul className="ns-list">
                <li>
                  <a href="">
                    Features
                  </a>
                </li>
                <li>
                  <a href="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul className='ns-list'>
                <li>
                  <a href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a className="terms" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <p className="downbit">© 2025 Mode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
