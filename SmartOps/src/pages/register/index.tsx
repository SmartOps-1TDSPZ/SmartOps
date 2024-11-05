import "./styles.css";

import Ellipse from "../../assets/Ellipse 5.svg";
import Logo from "../../assets/Logo-white-LadingPage.svg";
import Car from "../../assets/car.svg";
import Google from "../../assets/IconGoogle.svg";
import Facebook from "../../assets/IconFacebook.svg";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div className="allign-all">
      <header>
        <img src={Ellipse} alt="Google logo" className="blue-circle" />
        <img src={Logo} alt="Logo Escrito SmartOps" className="smart-ops" />
        <img src={Car} alt="Desenho de uma mulher" className="woman" />
      </header>

      <div className="container">
        <section
          className="register-box"
          role="form"
          aria-labelledby="register-title"
        >
          <h2 className="register-title">Cadastro</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Informe seu nome"
                aria-required="true"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Informe seu email"
                aria-required="true"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Informe sua senha"
                aria-required="true"
              />
            </div>
            <div className="align-buttom">
              <button type="submit" className="btn-continue">
                Continuar
              </button>
              <div className="align-or">
                <hr aria-hidden="true" />
                <span>Ou</span>
                <hr className="or-two" aria-hidden="true" />
              </div>
              <div className="align-socials">
                <a
                  href="https://www.google.com.br/?hl=pt-BR"
                  className="socials"
                  aria-label="Cadastro com Google"
                >
                  <img src={Google} alt="Google logo" className="icon-btn" />
                </a>
                <a
                  href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzE2NTEyNDc0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"
                  className="socials"
                  aria-label="Cadastro com Facebook"
                >
                  <img
                    src={Facebook}
                    alt="Facebook logo"
                    className="icon-btn"
                  />
                </a>
              </div>
            </div>
          </form>
          <p className="links">
            Já tem cadastro?
            <Link to="/login">Entre agora!</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
