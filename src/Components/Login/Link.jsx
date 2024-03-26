// import React, { useEffect, useState, useRef } from "react";

// const Link = ({ docId, title, url, onDelete, onUpdate }) => {
//   // Estados locales para el título y la URL del enlace
//   const [currentTitle, setCurrentTitle] = useState(title);
//   const [currentUrl, setCurrentUrl] = useState(url);
//   // Estados locales para indicar si se está editando el título y la URL
//   const [editTitle, setEditTitle] = useState(false);
//   const [editUrl, setEditUrl] = useState(false);

//   // Referencias a los campos de entrada para el título y la URL
//   const titleRef = useRef(null);
//   const urlRef = useRef(null);

//   // Efecto para enfocar el campo de entrada del título cuando se activa la edición del título
//   useEffect(() => {
//     if (editTitle && titleRef.current) {
//       titleRef.current.focus();
//     }
//   }, [editTitle]);

//   // Efecto para enfocar el campo de entrada de la URL cuando se activa la edición de la URL
//   useEffect(() => {
//     if (editUrl && urlRef.current) {
//       urlRef.current.focus();
//     }
//   }, [editUrl]);

//   // Maneja el inicio de la edición del título
//   const handleEditTitle = () => {
//     setEditTitle(true);
//   };

//   // Maneja el inicio de la edición de la URL
//   const handleEditUrl = () => {
//     setEditUrl(true);
//   };

//   // Maneja el cambio en el título del enlace
//   const handleChangeTitle = (e) => {
//     setCurrentTitle(e.target.value);
//   };

//   // Maneja el cambio en la URL del enlace
//   const handleChangeUrl = (e) => {
//     setCurrentUrl(e.target.value);
//   };

//   // Maneja el evento onBlur para el título del enlace
//   const handleBlurTitle = () => {
//     setEditTitle(false);
//     onUpdate(docId, currentTitle, currentUrl);
//   };

//   // Maneja el evento onBlur para la URL del enlace
//   const handleBlurUrl = () => {
//     setEditUrl(false);
//     onUpdate(docId, currentTitle, currentUrl);
//   };

//   // Maneja el evento de eliminación del enlace
//   const handleDelete = () => {
//     onDelete(docId);
//   };

//   return (
//     <div key={docId} className="conteinerLinksDashboard">
//       {/* Contenedor para el título del enlace */}
//       <div className="conteinerTitleLinkDashboard">
//         {editTitle ? (
//           // Renderiza un campo de entrada para editar el título
//           <>
//             <input
//               ref={titleRef}
//               value={currentTitle}
//               onChange={handleChangeTitle}
//               onBlur={handleBlurTitle}
//             />
//           </>
//         ) : (
//           // Renderiza el título del enlace con un botón de edición
//           <>
//             <button onClick={handleEditTitle}>edit</button>
//             {currentTitle}
//           </>
//         )}
//       </div>

//       {/* Contenedor para la URL del enlace */}
//       <div className="conteinerUrlLinkDashboard">
//         {editUrl ? (
//           // Renderiza un campo de entrada para editar la URL
//           <>
//             <input
//               ref={urlRef}
//               value={currentUrl}
//               onChange={handleChangeUrl}
//               onBlur={handleBlurUrl}
//             />
//           </>
//         ) : (
//           // Renderiza la URL del enlace con un botón de edición
//           <>
//             <button onClick={handleEditUrl}>edit</button>
//             {currentUrl}
//           </>
//         )}
//       </div>

//       {/* Botón para eliminar el enlace */}
//       <button onClick={handleDelete}>delete</button>
//     </div>
//   );
// };

// export default Link;
