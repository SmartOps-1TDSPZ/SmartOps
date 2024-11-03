import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import Car from "../../assets/car.svg";
import Ellipse from "../../assets/Ellipse 5.svg";
import Logo from "../../assets/Logo-white-LadingPage.svg";
import { loginUser } from "../../services/apiService";

const Login: React.FC = () => {
  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      const result = await loginUser(email, password);
      console.log("Login realizado com sucesso:", result);
    } catch (error) {
      console.error("Erro no login:", error);
    }
  };

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
          <form onSubmit={handleLoginSubmit}>
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
            <button type="submit" className="btn-continue">
              Continuar
            </button>
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
