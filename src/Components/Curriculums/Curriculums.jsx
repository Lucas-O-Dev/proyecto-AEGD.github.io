import React from 'react';
import FileUploadComponent from './FileUploadComponent';
import './_curriculums.scss';
import PDF from './PDFS/PDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Curriculums = () => {
    return (
        <>
            <div className='containerRouteCurriculums'>


                <div className="containerTitleRouteCurriculums">
                <h2>Curriculums</h2>
                <p>Crea ahora mismo tu curriculum y comienza a buscar empleo!</p>
                </div>

                <article className='articleRouteCurriculums'>

                <h4>Solo debes seguir estos pasos: </h4>

                <ul>
                    <li>Paso 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos facilis nihil. Cupiditate, sequi assumenda.</li>
                    <li>Paso 2:Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos facilis nihil.</li>
                    <li>Paso 3:Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>

                </article>

            {/* <PDFDownloadLink document={<PDF />} fileName='myfirstcurriculum.pdf'> 
            {({loading, url, blob, error}) =>
            loading ? (
                <button> loading document...</button>
            ) : ( 
                <button> Download Now!</button>
            )}
            </PDFDownloadLink> */}
            
            <PDF/>
            {/* <FileUploadComponent /> */}
            </div>
        </>
    );
}

export default Curriculums;
