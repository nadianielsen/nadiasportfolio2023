"use client"

// import { saveAs } from 'file-saver'; 
// import jsPDF from 'jspdf';
// import { LiaDownloadSolid } from "react-icons/lia";

// const DownloadButton = () => {

//     const handleDownload = () => {
//         const doc = new jsPDF(); 
//         doc.text('Hello world!', 10, 10); 
//         doc.save('./sample.pdf'); 
//     };

//     return ( 
//         <button onClick={handleDownload} className='bg-[#d2efc3] h-12 w-36 text-[#506945] rounded-md flex justify-center items-center gap-x-1 hover:bg-transparent hover:border-2 border-[#d2efc3] hover:transition hover:duration-500 hover:ease-in-out'>Download PDF <LiaDownloadSolid className='mt-1.5 text-xl' /></button>
//      );
// }
 
// export default DownloadButton;

const DownloadButton = ({style, filepdf, downloadPDF}) => {
  const downloadPdf = () => {
    const fileUrl = filepdf; // File path in public folder
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = downloadPDF ; // Suggest a filename
    document.body.appendChild(link); // Append to the DOM temporarily
    link.click(); //Programmatically click the link
    document.body.removeChild(link); // Clean up by removing the element
  };

  return (
    <button onClick={downloadPdf} className={`bg-black h-12 w-44 text-white rounded-md flex justify-center items-center gap-x-1 hover:bg-transparent hover:border-2 border-black hover:transition hover:duration-500 hover:ease-in-out ${style}`}>
      Download PDF 
      {/* <LiaDownloadSolid className='mt-1.5 text-xl' /> */}
    </button>
  );
};

export default DownloadButton;
