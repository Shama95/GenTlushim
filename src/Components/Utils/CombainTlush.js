import React, { useState, useEffect } from "react";
import axios from "axios";
import { xsltProcess, xmlParse } from "xslt-processor";

const CombainTlush = (props) => {
  const [tlush, setTlush] = useState();
  const server = "http://192.168.221.1:8080/";
  useEffect(() => {
    axios.get(server + props.xml).then((res) => {
      const xml1 = res.data;
      axios.get(server + props.xsl).then((res) => {
        const xsl1 = res.data;
        const outXmlString = xsltProcess(xmlParse(xml1), xmlParse(xsl1));
        setTlush(outXmlString);
      });
    });
  }, []);

  return (
    <div>
      <iframe srcdoc={tlush}></iframe>
    </div>
  );
};
export default CombainTlush;
