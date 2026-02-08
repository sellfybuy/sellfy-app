"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // LOGIN FAKE (por enquanto)
    if (email === "admin@selfly.com" && senha === "123456") {
      router.push("/dashboard");
    } else {
      setErro("Email ou senha inválidos");
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      background: "#070B18",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      
      {/* LADO ESQUERDO */}
      <section style={{
        flex: 1,
        padding: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h1 style={{ fontSize: "48px" }}>
          Crea, publica <br /> y vende.
        </h1>
        <p style={{ opacity: 0.7, maxWidth: "400px" }}>
          Potencia tu narrativa visual y convierte audiencias al instante.
        </p>
      </section>

      {/* LOGIN */}
      <section style={{
        width: "420px",
        background: "#0E1429",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <h2>Bienvenido de nuevo</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={inputStyle}
          />

          {erro && <p style={{ color: "red" }}>{erro}</p>}

          <button type="submit" style={buttonStyle}>
            Iniciar Sesión →
          </button>
        </form>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "#5B5CF6",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
};
