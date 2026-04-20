function Tarjeta({nombre, carrera, edad, imagen}){

    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

    return(
        
      <div className= "tarjeta">
        <h1 >Mi perfil</h1>

        <img
          src={imagen}
          alt="foto"
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
  );
}

export default Tarjeta;