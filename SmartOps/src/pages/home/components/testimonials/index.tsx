import "./styles.css";

import Aspas from "../../../../assets/Aspas-LadingPage.svg";
import Profile from "../../../../assets/ProfileModel-LadingPage.svg";

const Feedbacks: React.FC = () => {
  return (
    <>
      <h1 className="text-title-feedback">FeedBacks dos clientes</h1>
      <section className="feedbacksSection">
        <div className="container-feedbacks-cards">
          <div className="feedbacks-cards">
            <img src={Aspas} alt="" style={{ width: "10%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="card">
              <img src={Profile} alt="" />
              <div style={{ marginLeft: "5vw" }}>
                <h1>Pedro Silva</h1>
                <p>New York, NY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-feedbacks-cards">
          <div className="feedbacks-cards">
            <img src={Aspas} style={{ width: "10%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="card">
              <img src={Profile} alt="" />
              <div style={{ marginLeft: "5vw" }}>
                <h1>Marina Silva</h1>
                <p>Rio de Janeiro, RJ</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-feedbacks-cards">
          <div className="feedbacks-cards">
            <img src={Aspas} alt="" style={{ width: "10%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="card">
              <img src={Profile} alt="" />
              <div style={{ marginLeft: "5vw" }}>
                <h1>Rafael Bezerra</h1>
                <p>Santa Cruz, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedbacks;
