import { useState } from "react";

function Goruntu({ apodData }) {
  //   if (!apodData) {
  //     return <div>Yükleniyor...</div>;
  //   }
  return (
    <div className="img-container">
      <img src={apodData} alt="nasa" />
      {console.log("Goruntu:", apodData)}
    </div>
  );
}

export default Goruntu;
