import "./App.css";
import Menu from "./Menu";
import "./index.css";

function App() {
  return (
    <div>
      <Menu></Menu>
      <header>
        <div className="container">
          <h1>
            Hi! my name is
            <span>William Wang</span>
            <br />
            I'm a freshman student
            <br />
            at University of Washington.
          </h1>
          <br />
          <a href="./about.html" target="_blank">
            <button className="btn btn:hover">Learn more</button>
          </a>
        </div>
      </header>

      <section className="projects">
        <h1>PROJECTS</h1>
        <div className="projects-wrap">
          <div className="project-text">
            <h2>Snake</h2>
            <p>
              This project is an 8-bit Snake game using HTML, CSS, and JS. It
              provides features of point counting and self-collision lost alert.
            </p>
            <a
              href="https://github.com/RainbowBridge-William/snake-game"
              target="_blank"
              rel="noreferrer">
              <button className="btn btn:hover">Source Code</button>
            </a>
          </div>
          <div className="project-pic">
            <img
              src="./resource/snake.png"
              alt="snake game project picture"
              className="picture"
            />
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <i className="far fa-envelope"></i>
                <span>swang45@uw.edu</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Seattle, WA</span>
              </li>
            </ul>
            <ul className="media">
              <li>
                <a href="https://www.linkedin.com/in/william-wang-b973931b6/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/RainbowBridge-William">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100056648702687">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h2>Send a Message</h2>
            <div className="form-box">
              <div className="input-box w50">
                <input type="text" required />
                <span>First Name</span>
              </div>
              <div className="input-box w50">
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className="input-box w100">
                <input type="email" required />
                <span>Email Address</span>
              </div>
              <div className="input-box w100">
                <textarea type="email" required></textarea>
                <span>Write your message</span>
              </div>
              <div className="input-box w100 btn">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
