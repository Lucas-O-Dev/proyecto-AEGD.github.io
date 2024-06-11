import React from 'react';
import FileUploadComponent from './FileUploadComponent';
import SectionOneCurriculums from './SectionOneCurriculums';
import SectionSecondCurriculums from './SectionSecondCurriculums';
import './_curriculums.scss';
import PDF from './PDFS/PDF';
import { PDFDownloadLink } from '@react-pdf/renderer';


const Curriculums = () => {
    return (
        <>
            <div className='containerRouteCurriculums'>

                <SectionOneCurriculums/>

                <SectionSecondCurriculums/>

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
