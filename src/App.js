import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

function App() {
  const [apodData, setApodData] = useState([]);
  const [apodType, setApodType] = useState([]);

  const [inputDegeri, setInputDegeri] = useState("");

  const inputDegistir = (evt) => {
    const { value } = evt.target;
    setInputDegeri(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Zeh2jmucMoOtzd71ymHPU1kNDmWQZbdl5vbVeJg3&date=${inputDegeri}`
      )
      .then((response) => {
        setApodData(response.data.hdurl);
        setApodType(response.data.media_type);
      })
      .catch((error) => {
        console.error("Error fetching APOD data: ", error);
      });
  }, [inputDegeri]);

  return (
    <div>
      <Header />
      <Body
        apodData={apodData}
        inputDegistir={inputDegistir}
        apodType={apodType}
      />
      <Footer />
    </div>
  );
}

export default App;
