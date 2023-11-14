// Función constructora para crear objetos de equipo
function Equipo(nombre, puntos) {
    this.nombre = nombre;
    this.puntos = puntos;
    this.partidos = {
      jugados: 0,
      ganados: 0,
      perdidos: 0,
      empatados: 0,
    };
    this.goles = {
      golesFavor: 0,
      golesContra: 0,
    };
  }
  
  // Crear instancias de equipos
  let barcelona = new Equipo("Barcelona", 50);
  let realMadrid = new Equipo("Real Madrid", 45);
  let atleticoMadrid = new Equipo("Atletico Madrid", 33);
  
  // Acceder a propiedades de los equipos
  console.log(barcelona.nombre); // Barcelona
  console.log(realMadrid.puntos); // 45
  console.log(atleticoMadrid.nombre + " " + atleticoMadrid.puntos); // Atletico Madrid 33
  