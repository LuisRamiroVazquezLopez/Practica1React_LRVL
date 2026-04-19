import "./App.css";

function App() {
  const nombre = "Ramiro";
  const carrera = "Ingeniería en Sistemas";
  const edad = 20;

  const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1e3a8a",
      }}
    >
      <div
        style={{
          backgroundColor: "#3b82f6",
          padding: "25px",
          borderRadius: "15px",
          width: "300px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          border: "2px solid #1d4ed8",
        }}
      >
        <h1 style={{ color: "white" }}>Mi perfil</h1>

        <img
          src="/public/imagenes/yo.png"
          alt="Mi foto"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />

        <p style={{ color: "white" }}>
          <strong>Nombre:</strong> {nombre}
        </p>
        <p style={{ color: "white" }}>
          <strong>Carrera:</strong> {carrera}
        </p>
        <p style={{ color: "white" }}>
          <strong>Edad:</strong> {edad}
        </p>
        <p style={{ color: "white" }}>{mensaje}</p>
      </div>
    </div>
  );
}

export default App;
