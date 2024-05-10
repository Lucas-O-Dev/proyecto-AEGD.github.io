import React from 'react'

const ObtenerFechaActual = () => {

    const obtenerFechaActual = () => {
        const fecha = new Date();
        const opcionesDeFecha = {
          weekday: 'long', // día de la semana, por ejemplo: "Monday"
          year: 'numeric', // año, por ejemplo: "2024"
          month: 'long', // mes, por ejemplo: "May"
          day: 'numeric' // día del mes, por ejemplo: "9"
        };
      
        // La función toLocaleDateString() es una función integrada en JavaScript que convierte un objeto Date en una cadena de texto representando
        //  la fecha en el formato local específico del idioma y las opciones proporcionadas.

        // opcionesDeFecha es un objeto que contiene las opciones de formato que deseas aplicar a la fecha. En este caso,
        //  se han especificado las opciones para incluir el día de la semana completo, el año en formato numérico completo,
        //   el nombre completo del mes y el día del mes en formato numérico.

        return fecha.toLocaleDateString('es-ES', opcionesDeFecha);
      }
      
      // Ejemplo de uso
      const fechaActual = obtenerFechaActual();
      console.log("La fecha de hoy es:", fechaActual);

  return (
    <div>Fecha de carga: {fechaActual}</div>
  )
}

export default ObtenerFechaActual