import "./App.css";

function App() {
  const nombre = "Ramiro";
  const carrera = "Ingeniería en Sistemas";
  const edad = 20;

  const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

  return (
    <div className =  "contenedor">
      <div className= "tarjeta">
        <h1 >Mi perfil</h1>

        <img
          src="/imagenes/yo.png"
          alt="Mi foto"
          className = "imagen"
        />

        <p>
          <strong>Nombre:</strong> {nombre}
        </p>
        <p >
          <strong>Carrera:</strong> {carrera}
        </p>
        <p >
          <strong>Edad:</strong> {edad}
        </p>
        <p >{mensaje}</p>
      </div>
    </div>
  );
}

export default App;
