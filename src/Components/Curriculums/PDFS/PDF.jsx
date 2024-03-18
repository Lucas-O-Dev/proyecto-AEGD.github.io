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
import './_pdf.scss'
import jsPDF from 'jspdf';

const MyComponent = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    lastName: '', 
    email: '', 
    phone: ''
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
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <label htmlFor="phone">Teléfono:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button type="submit">Guardar y generar PDF</button>
    </form>
  );
};

export default MyComponent;



