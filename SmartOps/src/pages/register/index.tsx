import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import Car from "../../assets/car.svg";
import Ellipse from "../../assets/Ellipse 5.svg";
import Logo from "../../assets/Logo-white-LadingPage.svg";
import { registerUser } from "../../services/apiService";

const Register: React.FC = () => {
  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const numero = (form.elements.namedItem("numero") as HTMLInputElement)
      .value;
    const endereco = (form.elements.namedItem("endereco") as HTMLInputElement)
      .value;

    try {
      const result = await registerUser(
        name,
        email,
        password,
        numero,
        endereco
      );
      console.log("Cadastro realizado com sucesso:", result);
    } catch (error) {
      console.error("Erro no cadastro:", error);
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
          className="register-box"
          role="form"
          aria-labelledby="register-title"
        >
          <h2 className="register-title">Cadastro</h2>
          <form onSubmit={handleRegisterSubmit}>
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
            <div className="input-group">
              <input
                type="text"
                id="numero"
                name="numero"
                required
                placeholder="Informe seu número"
                aria-required="true"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="endereco"
                name="endereco"
                required
                placeholder="Informe seu endereço"
                aria-required="true"
              />
            </div>
            <button type="submit" className="btn-continue">
              Continuar
            </button>
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
