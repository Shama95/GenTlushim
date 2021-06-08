import React, { useState, useEffect } from "react";
import tempPic from "../../images/temp.jpg";

// Core viewer
import { Viewer } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
// Important note: Worker version and pdfjs package has to have the same version

//import axios from "axios";
//import { xsltProcess, xmlParse } from "xslt-processor";

/*
https://react-pdf-viewer.dev/
https://react-pdf-viewer.dev/docs/basic-usage/
https://github.com/HamzaAnwar1998/Upload-View-Pdf-In-Reactjs/blob/main/src/App.js

*/

const VisualizeTlush = ({ data }) => {
  const [tlush, setTlush] = useState(null);
  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null); // for submit event
  const fileType = ["application/pdf"];

  const defaultLayoutPluginInstance = defaultLayoutPlugin(); // Create new plugin instance
  console.log(data);

  // useEffect(() => {
  //   axios.get(server + props.xml).then((res) => {
  //     const xml1 = res.data;
  //     axios.get(server + props.xsl).then((res) => {
  //       const xsl1 = res.data;
  //       const outXmlString = xsltProcess(xmlParse(xml1), xmlParse(xsl1));
  //       setTlush(outXmlString);
  //     });
  //   });
  // }, []);
const VisualizeTlush = (props) => {
 // console.log(props.data)
 // const myDate = new Date(props.date)
  const [tlush, setTlush] = useState(null);
  const server = "http://localhost:8081";
  
   useEffect(() => {
    console.log(props)
  //  console.log(props.data)
     if(Object.keys(props.data).length !== 0){
  //   alert(props.data.personalNumber)
     var month = props.data.date.getMonth()+1
     var year = props.data.date.getFullYear()
     var population = props.data.population.value 
     var personalNumber = props.data.personalNumber
     personalNumber = "453374"
     population = "KEVA"
     year = 2019
     month = 12
     axios.get(server + "/tlush/"+ personalNumber + "/" + population + "/" + year + "/" + month).then((res) => {
       const xml1 = res.data;
       axios.get(server + "/style/" + population + "/" + year).then((res) => {
         const xsl1 = res.data;
         const outXmlString = xsltProcess(xmlParse(xml1), xmlParse(xsl1));
         setTlush(outXmlString);
         console.log("tlush")
         console.log(outXmlString)
    //     html2canvas(outXmlString).then(canvas => {
     //     const imgData = canvas.toDataURL('image/png');
   //       setTlush(imgData);
    //      const pdf = new jsPDF();
    //      pdf.addImage(imgData, 'PNG', 0, 0);
    //      pdf.save("download.pdf"); 
   //   })
       });
     });
    }
   });

  // return (
  //   <div>
  //     {Object.keys(data).length === 0 ? null : (
  //       <div>
  //         <Viewer
  //           fileUrl="../../Documents/lorem-ipsum.pdf"
  //           plugins={[defaultLayoutPluginInstance]}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="container">
      <div className="pdf-container">
        {/* show pdf conditionally (if we have one)  */}
        {viewPdf && (
          <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer
                fileUrl="http://localhost:3000/Documents/lorem-ipsum.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </>
        )}

        {/* if we dont have pdf or viewPdf state is null */}
        {!viewPdf && <>No pdf file selected</>}
      </div>
    </div>
  );
};
export default VisualizeTlush;
