export default function Cadastro() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0F172A",
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "420px",
        background: "#020617",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 0 40px rgba(0,0,0,0.5)"
      }}>
        <h1 style={{ fontSize: "28px", marginBottom: "10px", textAlign: "center" }}>
          Criar conta na SellFy
        </h1>

        <p style={{ textAlign: "center", color: "#94A3B8", marginBottom: "30px" }}>
          Comece a vender seus produtos digitais hoje
        </p>

        <input
          type="email"
          placeholder="Seu e-mail"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Crie uma senha"
          style={inputStyle}
        />

        <button style={{
          width: "100%",
          padding: "14px",
          marginTop: "20px",
          background: "#22C55E",
          color: "#022C22",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Criar conta grátis
        </button>

        <p style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "#64748B",
          textAlign: "center"
        }}>
          Já tem conta? <span style={{ color: "#22C55E", cursor: "pointer" }}>Entrar</span>
        </p>
      </div>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #1E293B",
  background: "#020617",
  color: "#FFFFFF",
  outline: "none"
};
