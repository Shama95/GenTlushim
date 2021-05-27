import React, { useState, useEffect } from "react";
//import axios from "axios";
//import { xsltProcess, xmlParse } from "xslt-processor";
import tempPic from "../../images/temp.jpg";

const VisualizeTlush = ({ data }) => {
  const [tlush, setTlush] = useState();
  const server = "http://192.168.221.1:8080/";
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

  console.log(data);

  return (
    <div>
      {Object.keys(data).length === 0 ? null : (
        <img className="ui fluid image" src={tempPic} alt="pic" />
      )}
    </div>
  );
};
export default VisualizeTlush;
