import "./App.css";
import Tarjeta from "./Tarjeta";

function App() {
  
  //arreglo de objetos
  const personas = [
    {
      nombre: "Ramiro",
      carrera: "Ingeniería en Software",
      edad: 21,
      imagen: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      nombre: "Karla",
      carrera: "Médico Cirujano",
      edad: 19,
      imagen: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      nombre: "Eliseo",
      carrera: "Arquitectura",
      edad: 17,
      imagen: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  return (
    <div className="contenedor">

      {
        personas.map((persona, index) => (
          <Tarjeta
            key={index}
            nombre={persona.nombre}
            carrera={persona.carrera}
            edad={persona.edad}
            imagen={persona.imagen}
          />
        ))
      }
    </div>
  );
}

export default App;
