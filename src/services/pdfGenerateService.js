import axios from "axios";

export const generatePdf = (invoiceData) => {

  return axios({
    method: 'post',
    url:'http://localhost:3000/invoice/generate',
    headers: {
      'Content-Type': 'application/json'
    },
    data: invoiceData
  })
  .then(response => {
    return response
  })
}