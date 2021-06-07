import React, { useState, useEffect } from "react";
import axios from "axios";
import { xsltProcess, xmlParse } from "xslt-processor";
//import tempPic from "../../images/temp.jpg";
import html2canvas from 'html2canvas';

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


  return (
    
    <div>
      {Object.keys(props.data).length === 0 ? null : (
        <div dangerouslySetInnerHTML={{__html: {tlush}}}></div>
      )}
    </div>
  );
};
export default VisualizeTlush;
