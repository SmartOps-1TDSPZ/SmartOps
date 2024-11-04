import React from "react";
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
    <div className="container">
      <h2>Registro</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="input-group">
          <input type="text" name="name" required placeholder="Nome" />
        </div>
        <div className="input-group">
          <input type="email" name="email" required placeholder="E-mail" />
        </div>
        <div className="input-group">
          <input type="password" name="password" required placeholder="Senha" />
        </div>
        <div className="input-group">
          <input type="text" name="numero" required placeholder="Número" />
        </div>
        <div className="input-group">
          <input type="text" name="endereco" required placeholder="Endereço" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
