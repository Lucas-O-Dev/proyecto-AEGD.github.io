// import {
//     Document,
//     Text,
//     Page,
//     StyleSheet,
//     Image,
//     View
// } from '@react-pdf/renderer'

// import myImage from './pngegg.png'

// const styles = StyleSheet.create ({
//     page: {
//         display: "flex",
//         backgroundColor:"#E4E4E4"
//     },
//     section: {
//         display: "flex",
//         flexDirection: "row",
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     },
//     title: {
//         fontSize: 24,
//         textAlign: "center",
//         fontWeight: "bold"
//     }
// })
// function PDF() {
//     return (
//         <Document>
//             <Page style={styles.page}>
//                 <Text style={styles.title}>Hello Word</Text>
//                     <View style={styles.section}>
//                         <Image src={myImage}/>
//                         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat, qui ad, reprehenderit quas aliquam maiores distinctio at ipsum voluptatem magnam. Saepe in distinctio, eius ducimus quam nam doloremque ea.</Text>
//                     </View>
//                     <View>
//                         <Text render={({pageNumber, totalPages}) =>
//                     `${pageNumber}/${totalPages}`}/>
//                     </View>
//             </Page>
//         </Document>
//     )
// }
// export default PDF

import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './_pdf.scss'
import jsPDF from 'jspdf';

const MyComponent = () => {

  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({ 
    name: '', 
    lastName: '', 
    email: '', 
    direccion: '',
    localidad: '',
    cp: '',
    numeroTelefonico: '',
    estudiosPrimarios: '',
    estudiosSecundarios: '',
    estudiosTerciarios: '',
    estudiosUniversitarios: '',
    experienciasLaborales: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.text(JSON.stringify(formData, null, 4), 10, 10);

    // Guardar el PDF
    doc.save('formulario.pdf');

    // Mostrar un mensaje en la consola
    console.log('Formulario guardado como formulario.pdf');
    navigate ('/')
  };

  return (
    <form onSubmit={handleSubmit}>

    <section>
    <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Apellido:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        value={formData.direccion}
        onChange={handleChange}
      />
            <label htmlFor="localidad">Localidad:</label>
      <input
        type="text"
        id="localidad"
        name="localidad"
        value={formData.localidad}
        onChange={handleChange}
      />
            <label htmlFor="cp">Código Postal:</label>
      <input
        type="text"
        id="cp"
        name="cp"
        value={formData.cp}
        onChange={handleChange}
      />
    </section>


    <section>
    <label htmlFor="numeroTelefonico">Número Telefónico:</label>
      <input
        type="text"
        id="numeroTelefonico"
        name="numeroTelefonico"
        value={formData.numeroTelefonico}
        onChange={handleChange}
      />
      <label htmlFor="estudiosPrimarios">Estudios Primarios:</label>
      <input
        type="text"
        id="estudiosPrimarios"
        name="estudiosPrimarios"
        value={formData.estudiosPrimarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosSecundarios">Estudios Secundarios:</label>
      <input
        type="text"
        id="estudiosSecundarios"
        name="estudiosSecundarios"
        value={formData.estudiosSecundarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosTerciarios">Estudios Terciarios:</label>
      <input
        type="text"
        id="estudiosTerciarios"
        name="estudiosTerciarios"
        value={formData.estudiosTerciarios}
        onChange={handleChange}
      />
                  <label htmlFor="estudiosUniversitarios">Estudios Universitarios:</label>
      <input
        type="text"
        id="estudiosUniversitarios"
        name="estudiosUniversitarios"
        value={formData.estudiosUniversitarios}
        onChange={handleChange}
      />
                  <label htmlFor="experienciasLaborales">Experiencias Laborales:</label>
      <input
        type="text"
        id="experienciasLaborales"
        name="experienciasLaborales"
        value={formData.experienciasLaborales}
        onChange={handleChange}
      />
    </section>
      <button type="submit">Guardar y generar PDF</button>
    </form>
  );
};

export default MyComponent;



