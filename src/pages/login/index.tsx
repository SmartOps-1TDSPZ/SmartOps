import "./styles.css";

import Ellipse from "../../assets/Ellipse 5.svg";
import Logo from "../../assets/Logo-white-LadingPage.svg";
import Car from "../../assets/car.svg";
import Google from "../../assets/IconGoogle.svg";
import Facebook from "../../assets/IconFacebook.svg";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="allign-all">
      <header>
        <img src={Ellipse} alt="Google logo" className="blue-circle" />
        <img src={Logo} alt="Logo Escrito SmartOps" className="smart-ops" />
        <img src={Car} alt="Imagem de um carro" className="car" />
      </header>

      <div className="container">
        <section
          className="login-box"
          role="form"
          aria-labelledby="login-title"
        >
          <h2 className="login-title">Login</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Informe seu e-mail"
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
            <div className="forgot-password">
              <a href="#">
                <p>Esqueci minha senha</p>
              </a>
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
                  aria-label="Login com Google"
                >
                  <img src={Google} alt="Google logo" className="icon-btn" />
                </a>
                <a
                  href="https://www.facebook.com/login"
                  className="socials"
                  aria-label="Login com Facebook"
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
            Ainda não tem conta?
            <Link to="/register">Cadastre-se Já!</Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
