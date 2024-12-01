// Valid input
export const validInvoice = {
    sellerName: "KNP Travels",
    sellerAddress: "10, Unity Society",
    sellerCity: "Bhopal",
    sellerState: "Madhya Pradesh",
    sellerCountry: "India",
    sellerGSTIN: "23BYIPJ2821F1ZT",
  
    buyerName: "WCRMS Main Branch",
    buyerAddress: "Main Branch",
    buyerCity: "Bhopal",
    buyerState: "Madhya Pradesh",
    buyerCountry: "India",
  
    invoiceNumber: "KNP-06/2024",
    invoiceDate: new Date('2024-11-29'),
    dueDate: new Date('2024-12-03'),
    placeOfSupply: "Madhya Pradesh",
  
    items: [
      {
        description: "Innova Crysta",
        hsn: "1",
        quantity: 1,
        rate: 3500,
        sgst: 0,
        cgst: 0,
        cess: 0
      }
    ]
  };
  
  // Invalid input would be rejected
  export const invalidInvoice = {
    // Missing required fields
    // Wrong data types
    // Incomplete information
  };