import Footer from "../../components/footer";
import SectionBlue from "./components/sectionBlue";
import About from "../../assets/aboutUs.svg";
import Orçamento from "../../assets/Orcamento-LadingPage.svg";
import OpsBot from "../../assets/OpsBot-LadingPage.svg";
import Caps from "../../assets/CAPS-LadingPage.svg";

import "./styles.css";
import Feedbacks from "./components/testimonials";

const Home: React.FC = () => {
  return (
    <>
      <SectionBlue />
      <section className="sobre-nos">
        <h1>Segurança e autonomia para você!</h1>
        <p>
          Bem-vindo à SmartOps, o futuro do cuidado automotivo. Somos uma
          startup pioneira dedicada a transformar a forma como os diagnósticos
          de veículos são realizados. Nossa missão é capacitar motoristas e
          mecânicos com tecnologia de ponta que simplifica e automatiza o
          processo de diagnóstico, garantindo que cada veículo funcione da
          melhor forma possível. SmartOps, vislumbramos um mundo onde a
          manutenção de carros é descomplicada, eficiente e acessível para
          todos. Acreditamos que, aproveitando a tecnologia avançada, podemos
          eliminar a incerteza dos diagnósticos de veículos e fornecer insights
          precisos e confiáveis que ajudam a prolongar a vida do seu carro e
          melhorar sua experiência de condução.
        </p>
        <p>
          A AutoDiagnóstico oferece um aplicativo móvel revolucionário que traz
          diagnósticos automotivos autônomos para a palma da sua mão. Nosso
          aplicativo usa sensores de última geração e inteligência artificial
          para realizar diagnósticos abrangentes no seu veículo, identificando
          problemas de forma precisa e rápida. Seja lidando com uma luz de
          verificação do motor inesperada ou se preparando para uma longa
          viagem, a AutoDiagnóstico está aqui para garantir que seu carro esteja
          em condições ideais.
        </p>
        <img src={About} alt="" />
      </section>

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
      <Footer />
    </>
  );
};

export default Home;
