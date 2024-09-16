import Footer from "../../components/footer";
import SectionBlue from "./components/sectionBlue";
import About from "../../assets/aboutUs.svg";
import Orçamento from "../../assets/Orcamento-LadingPage.svg";
import OpsBot from "../../assets/OpsBot-LadingPage.svg";
import Caps from "../../assets/CAPS-LadingPage.svg";

import "./styles.css";
import Feedbacks from "./components/testimonials";
import Faq from "../../components/faq";
import LogoLanding from "../../assets/Logo-LadingPage.svg";
import SimpleButton from "../../components/simpleButton";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "HOW OFTEN SHOULD I GET AN OIL CHANGE?",
    answer: "Every 5,000 miles or as recommended by the manufacturer.",
  },
  {
    question: "WHEN SHOULD I CHECK FLUID LEVELS?",
    answer: "Check every month to ensure optimal performance.",
  },
  {
    question: "WHEN SHOULD I CHANGE THE OIL?",
    answer: "Typically every 5,000 miles or as directed.",
  },
  {
    question: "WHEN SHOULD I REPLACE MY BRAKE PADS?",
    answer: "Brake pads should be replaced every 25,000 to 70,000 miles.",
  },
  {
    question: "WHEN SHOULD I REPLACE BATTERY?",
    answer: "Usually every 3-5 years or as it starts to fail.",
  },
  {
    question: "WHEN SHOULD I GET A TIRE ROTATION?",
    answer: "Rotate your tires every 6,000 to 8,000 miles.",
  },
];

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container">
        <header>
          <picture>
            <source media="(min-width: 768px)" src={LogoLanding} />
            <img className="img-logo" src={LogoLanding} alt="" />
          </picture>
          <h1 className="h1-1">
            O LUGAR CERTO <br /> PARA O SEU CARRO
          </h1>
          <h2 className="h2-2">
            Assuma o controle total da saúde do seu veículo
            <br />
            tecnologia que fala a língua do seu carro
          </h2>
          <div className="align-button">
            <Link to="/register">
              <SimpleButton
                text="CONHEÇA MAIS"
                variant="primary"
                width={187}
                height={43}
                color="#489DDA"
                textColor="#fff"
              />
            </Link>
          </div>
        </header>
        <div className="align-items">
          <SectionBlue />
          <section className="sobre-nos">
            <h1>Segurança e autonomia para você!</h1>
            <p>
              Bem-vindo à SmartOps, o futuro do cuidado automotivo. Somos uma
              startup pioneira dedicada a transformar a forma como os
              diagnósticos de veículos são realizados. Nossa missão é capacitar
              motoristas e mecânicos com tecnologia de ponta que simplifica e
              automatiza o processo de diagnóstico, garantindo que cada veículo
              funcione da melhor forma possível. SmartOps, vislumbramos um mundo
              onde a manutenção de carros é descomplicada, eficiente e acessível
              para todos. Acreditamos que, aproveitando a tecnologia avançada,
              podemos eliminar a incerteza dos diagnósticos de veículos e
              fornecer insights precisos e confiáveis que ajudam a prolongar a
              vida do seu carro e melhorar sua experiência de condução.
            </p>
            <p>
              A AutoDiagnóstico oferece um aplicativo móvel revolucionário que
              traz diagnósticos automotivos autônomos para a palma da sua mão.
              Nosso aplicativo usa sensores de última geração e inteligência
              artificial para realizar diagnósticos abrangentes no seu veículo,
              identificando problemas de forma precisa e rápida. Seja lidando
              com uma luz de verificação do motor inesperada ou se preparando
              para uma longa viagem, a AutoDiagnóstico está aqui para garantir
              que seu carro esteja em condições ideais.
            </p>
            <div className="align-about">
              <img src={About} alt="" />
            </div>
          </section>
        </div>

        <h1 className="text-title-services">Explore nossos serviços</h1>

        <section className="servicesSection">
          <div className="polariod">
            <img src={Orçamento} alt="" style={{ width: "100%" }} />
            <div className="polaroid-text">
              <h1>Orçamentos</h1>
            </div>
          </div>

          <div className="polariod">
            <img src={OpsBot} alt="" style={{ width: "100%" }} />
            <div className="polaroid-text">
              <h1>OpsBot</h1>
            </div>
          </div>
          <div className="polariod">
            <img src={Caps} alt="" style={{ width: "100%" }} />
            <div className="polaroid-text">
              <h1>Centros Automotivos Porto Seguro</h1>
            </div>
          </div>
        </section>
        <Feedbacks />
        <Faq faqs={faqs} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
