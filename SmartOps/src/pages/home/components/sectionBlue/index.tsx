import "./styles.css";
import Prices from "../../../../assets/prices-LandingPage.svg";
import Guarantee from "../../../../assets/guarantee-LadingPage.svg";
import Autonomy from "../../../../assets/autonomia-LadingPage.svg";

const SectionBlue: React.FC = () => {
  return (
    <>
      <section className="sectionBlue">
        <div className="sectionBlue-components">
          <img src={Prices} alt="" />
          <div className="sectionBlue-text">
            <h1>Orçamento Certo</h1>
            <p>
              All mechanical repairs and services are available at affordable
              rates
            </p>
          </div>
        </div>
        <div className="sectionBlue-components">
          <img src={Guarantee} alt="" />
          <div className="sectionBlue-text">
            <h1>100% Aprovação</h1>
            <p>All of our repairs and services come with a guarantee period</p>
          </div>
        </div>
        <div className="sectionBlue-components">
          <img src={Autonomy} alt="" />
          <div className="sectionBlue-text">
            <h1>Autonomia</h1>
            <p>All of our mechanics are qualified and are regularly trained.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBlue;
