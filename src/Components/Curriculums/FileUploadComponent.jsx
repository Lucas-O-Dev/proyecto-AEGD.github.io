import React, { useState } from 'react';
import {storage} from '../../../Firebase/Config'
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'
// Definición del componente para la carga de archivos
const FileUploadComponent = () => {

const [img, setImg] = useState('')

const handleClick = () => {
const imgRef = ref (storage, `Curriculums/${v4()}`)
uploadBytes (imgRef,img)
}

  // Renderizar el componente de carga de archivos
  return (
    <div>
      <p>
        Sube una imagen:
        {/* Campo de entrada para seleccionar un archivo */}
        <input type="file" onChange={(e) => setImg (e.target.files[0])}/>
      </p>
      {/* Botón para enviar el formulario */}
      <button onClick={handleClick}>Subir Archivo</button>
    </div>
  );
};

export default FileUploadComponent; // Exportar el componente de carga de archivos
