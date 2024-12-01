import React from 'react'
import axios from 'axios'
// import { generatePdf } from '../services/pdfGenerateService'
import { validInvoice } from '../Constant/pdfConstant'
import './createPDF.scss'

const CreatePDF = () => {

  const handleClick = () => {
    axios.post('http://localhost:3000/invoice/generate', validInvoice, {
      responseType: 'blob'
    }).then(response => {
      // Create downloadable PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <div className='pdf-page'>
      <button className="centered-button" onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default CreatePDF