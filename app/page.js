import Link from "next/link";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      fontFamily: "Arial, sans-serif",
      background: "#020617",
      color: "#fff"
    }}>

      {/* LADO ESQUERDO */}
      <section style={{
        padding: "80px",
        background: "linear-gradient(135deg, #1e1b4b, #020617)"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Crea, publica <br /> y vende.
        </h1>

        <p style={{ maxWidth: "420px", opacity: 0.85 }}>
          Potencia tu narrativa visual con tecnología moderna.
          Convierte audiencias en ventas automáticamente.
        </p>

        <div style={{ marginTop: "40px", opacity: 0.7 }}>
          Únete a +10.000 creadores
        </div>
      </section>

      {/* LADO DIREITO */}
      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "360px"
        }}>
          <h2>Bienvenido de nuevo</h2>
          <p style={{ opacity: 0.7, marginBottom: "20px" }}>
            Ingresa tus credenciales
          </p>

          <input
            placeholder="Correo electrónico"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Contraseña"
            style={inputStyle}
          />

          <button style={primaryButton}>
            Iniciar sesión
          </button>

          <p style={{ marginTop: "20px", fontSize: "14px" }}>
            ¿Aún no tienes cuenta?{" "}
            <Link href="/cadastro">Regístrate aquí</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "none"
};

const primaryButton = {
  width: "100%",
  padding: "14px",
  background: "#6366F1",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer"
};
