import aboutOne from "../imgs/about1.jpg";
import aboutTwo from "../imgs/about2.jpg";
import "./About.css";
function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="row">
          <h1>Who We Are</h1>
          <div className="col-12">
            <div className="about">
              <div className="about-text">
                <h4>Our Story</h4>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              <div className="img">
                <img src={aboutOne} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="story">
              <div className="img">
                <img src={aboutTwo} alt="" />
              </div>

              <div className="story-text">
                <h4>Our Mission </h4>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
