const API_URL = "http://localhost:8080/SprintDefinitiva_war/api/rest";

// Login
export const loginUser = async (email: string, password: string) => {
  try {
    console.log();
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"email": email,"senha": password }),
    });


    if (!response.ok) {
      throw new Error("Erro no login");
    }
    const result = await response.json();

    console.log(result);
    
    return result;
  } catch (error) {
    console.error("Erro:", error);
    throw error;
  }
};

// Cadastro
export const registerUser = async (
  name: string,
  email: string,
  password: string,
  numero: string,
  endereco: string
) => {
  try {
    const response = await fetch(`${API_URL}/clientes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: name,
        email: email,
        senha: password,
        numero: numero,
        endereco: endereco,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro no cadastro");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    throw error;
  }
};
