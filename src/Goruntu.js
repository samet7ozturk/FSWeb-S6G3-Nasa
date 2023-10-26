import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Spinner } from "reactstrap";

function Goruntu({ apodData, apodType }) {
  if (!apodData) {
    return <Spinner>Loading...</Spinner>;
  }
  if (apodType === "image") {
    return (
      <div className="img-thumbnail ">
        <img src={apodData} alt="nasa" width="100%" />
      </div>
    );
  } else {
    return (
      <div>
        <ReactPlayer url={apodData} />
      </div>
    );
  }
}

export default Goruntu;
