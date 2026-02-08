import Link from "next/link";

export default function Home() {
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
        maxWidth: "500px",
        textAlign: "center"
      }}>
        <h1>SellFy</h1>

        <p style={{ marginTop: "10px", marginBottom: "30px" }}>
          Venda seus produtos digitais em minutos.
          Checkout rápido, PIX automático e segurança avançada.
        </p>

        <Link href="/cadastro">
          <button style={{
            background: "#22C55E",
            color: "#0F172A",
            border: "none",
            padding: "14px 28px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Criar conta grátis
          </button>
        </Link>
      </div>
    </main>
  );
}
