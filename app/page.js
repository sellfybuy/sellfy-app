export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      background: "#0F2A44",
      color: "#ffffff"
    }}>
      <h1>SellFy App</h1>
      <p>Painel oficial da plataforma SellFy</p>

      <div style={{ marginTop: 20 }}>
        <a href="/login" style={{ marginRight: 10, color: "#16C784" }}>
          Login
        </a>
        <a href="/cadastro" style={{ color: "#16C784" }}>
          Criar conta
        </a>
      </div>
    </main>
  );
}
