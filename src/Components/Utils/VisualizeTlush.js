import React, { useState, useEffect } from "react";
import axios from "axios";

// Core viewer
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
// Important note: Worker version and pdfjs package has to have the same version

//import { xsltProcess, xmlParse } from "xslt-processor";

/*
https://react-pdf-viewer.dev/
https://react-pdf-viewer.dev/docs/basic-usage/
https://github.com/HamzaAnwar1998/Upload-View-Pdf-In-Reactjs/blob/main/src/App.js

*/

const VisualizeTlush = ({ data }) => {
  const fakePdf = [
    37, 80, 68, 70, 45, 49, 46, 55, 10, 10, 49, 32, 48, 32, 111, 98, 106, 32,
    32, 37, 32, 101, 110, 116, 114, 121, 32, 112, 111, 105, 110, 116, 10, 60,
    60, 10, 32, 32, 47, 84, 121, 112, 101, 32, 47, 67, 97, 116, 97, 108, 111,
    103, 10, 32, 32, 47, 80, 97, 103, 101, 115, 32, 50, 32, 48, 32, 82, 10, 62,
    62, 10, 101, 110, 100, 111, 98, 106, 10, 10, 50, 32, 48, 32, 111, 98, 106,
    10, 60, 60, 10, 32, 32, 47, 84, 121, 112, 101, 32, 47, 80, 97, 103, 101,
    115, 10, 32, 32, 47, 77, 101, 100, 105, 97, 66, 111, 120, 32, 91, 32, 48,
    32, 48, 32, 50, 48, 48, 32, 50, 48, 48, 32, 93, 10, 32, 32, 47, 67, 111,
    117, 110, 116, 32, 49, 10, 32, 32, 47, 75, 105, 100, 115, 32, 91, 32, 51,
    32, 48, 32, 82, 32, 93, 10, 62, 62, 10, 101, 110, 100, 111, 98, 106, 10, 10,
    51, 32, 48, 32, 111, 98, 106, 10, 60, 60, 10, 32, 32, 47, 84, 121, 112, 101,
    32, 47, 80, 97, 103, 101, 10, 32, 32, 47, 80, 97, 114, 101, 110, 116, 32,
    50, 32, 48, 32, 82, 10, 32, 32, 47, 82, 101, 115, 111, 117, 114, 99, 101,
    115, 32, 60, 60, 10, 32, 32, 32, 32, 47, 70, 111, 110, 116, 32, 60, 60, 10,
    32, 32, 32, 32, 32, 32, 47, 70, 49, 32, 52, 32, 48, 32, 82, 32, 10, 32, 32,
    32, 32, 62, 62, 10, 32, 32, 62, 62, 10, 32, 32, 47, 67, 111, 110, 116, 101,
    110, 116, 115, 32, 53, 32, 48, 32, 82, 10, 62, 62, 10, 101, 110, 100, 111,
    98, 106, 10, 10, 52, 32, 48, 32, 111, 98, 106, 10, 60, 60, 10, 32, 32, 47,
    84, 121, 112, 101, 32, 47, 70, 111, 110, 116, 10, 32, 32, 47, 83, 117, 98,
    116, 121, 112, 101, 32, 47, 84, 121, 112, 101, 49, 10, 32, 32, 47, 66, 97,
    115, 101, 70, 111, 110, 116, 32, 47, 84, 105, 109, 101, 115, 45, 82, 111,
    109, 97, 110, 10, 62, 62, 10, 101, 110, 100, 111, 98, 106, 10, 10, 53, 32,
    48, 32, 111, 98, 106, 32, 32, 37, 32, 112, 97, 103, 101, 32, 99, 111, 110,
    116, 101, 110, 116, 10, 60, 60, 10, 32, 32, 47, 76, 101, 110, 103, 116, 104,
    32, 52, 52, 10, 62, 62, 10, 115, 116, 114, 101, 97, 109, 10, 66, 84, 10, 55,
    48, 32, 53, 48, 32, 84, 68, 10, 47, 70, 49, 32, 49, 50, 32, 84, 102, 10, 40,
    72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 41, 32, 84,
    106, 10, 69, 84, 10, 101, 110, 100, 115, 116, 114, 101, 97, 109, 10, 101,
    110, 100, 111, 98, 106, 10, 10, 120, 114, 101, 102, 10, 48, 32, 54, 10, 48,
    48, 48, 48, 48, 48, 48, 48, 48, 48, 32, 54, 53, 53, 51, 53, 32, 102, 32, 10,
    48, 48, 48, 48, 48, 48, 48, 48, 49, 48, 32, 48, 48, 48, 48, 48, 32, 110, 32,
    10, 48, 48, 48, 48, 48, 48, 48, 48, 55, 57, 32, 48, 48, 48, 48, 48, 32, 110,
    32, 10, 48, 48, 48, 48, 48, 48, 48, 49, 55, 51, 32, 48, 48, 48, 48, 48, 32,
    110, 32, 10, 48, 48, 48, 48, 48, 48, 48, 51, 48, 49, 32, 48, 48, 48, 48, 48,
    32, 110, 32, 10, 48, 48, 48, 48, 48, 48, 48, 51, 56, 48, 32, 48, 48, 48, 48,
    48, 32, 110, 32, 10, 116, 114, 97, 105, 108, 101, 114, 10, 60, 60, 10, 32,
    32, 47, 83, 105, 122, 101, 32, 54, 10, 32, 32, 47, 82, 111, 111, 116, 32,
    49, 32, 48, 32, 82, 10, 62, 62, 10, 115, 116, 97, 114, 116, 120, 114, 101,
    102, 10, 52, 57, 50, 10, 37, 37, 69, 79, 70,
  ];
  const server = "http://localhost:8081";
  // for onchange event
  const [pdfByteArray, setPdfByteArray] = useState(null);
  //const [viewPdf, setViewPdf] = useState(false); // for submit event

  const defaultLayoutPluginInstance = defaultLayoutPlugin(); // Create new plugin instance
  console.log(data);

  useEffect(() => {
    const getTlushByteArray = async (
      personalNumber,
      population,
      year,
      month
    ) => {
      const { axiosData } = await axios.get(
        server +
          "/tlush/" +
          personalNumber +
          "/" +
          population +
          "/" +
          year +
          "/" +
          month
      );
      //setPdfByteArray(axiosData);
      setPdfByteArray(fakePdf);
    };

    if (Object.keys(data).length !== 0) {
      //   alert(data.personalNumber)
      let month = data.date.getMonth() + 1;
      let year = data.date.getFullYear();
      let population = data.population.value;
      let personalNumber = data.personalNumber;
      // personalNumber = "453374";
      // population = "KEVA";
      // year = 2019;
      // month = 12;
      getTlushByteArray(personalNumber, population, year, month);
    }
  }, [data]);

  // fileUrl must be a link to a server, even if its a local file
  // return (
  //   <div className="container">
  //     <div
  //       className="pdf-container"
  //       style={{
  //         border: "1px rgba(0, 0, 0, 0.3)",
  //         height: "750px",
  //       }}
  //     >
  //       {/* {viewPdf && (
  //         <>
  //           <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
  //             <Viewer
  //               // fileUrl="http://localhost:3000/Documents/lorem-ipsum.pdf"
  //               fileUrl={new Uint8Array(fakePdf)}
  //               defaultScale={SpecialZoomLevel.PageFit}
  //               plugins={[defaultLayoutPluginInstance]}
  //             />
  //           </Worker>
  //         </>
  //       )} */}
  //       <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
  //             <Viewer
  //               // fileUrl="http://localhost:3000/Documents/lorem-ipsum.pdf"
  //               fileUrl={new Uint8Array(fakePdf)}
  //               defaultScale={SpecialZoomLevel.PageFit}
  //               plugins={[defaultLayoutPluginInstance]}
  //             />
  //           </Worker>
  //       {!viewPdf && <>Please Enter Search Parameters</>}
  //     </div>
  //   </div>
  // );
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          fileUrl={new Uint8Array(fakePdf)}
          defaultScale={SpecialZoomLevel.PageFit}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};
export default VisualizeTlush;
