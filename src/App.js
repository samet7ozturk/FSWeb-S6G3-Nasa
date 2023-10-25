import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Goruntu from "./Goruntu";

function App() {
  const [apodData, setApodData] = useState([]);

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
        setApodData(response.data.url);
        console.log("app: ", response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching APOD data: ", error);
      });
  }, [inputDegeri]);

  return (
    <div>
      <Header />
      <Body apodData={apodData} inputDegistir={inputDegistir} />
      <Footer />
    </div>
  );
}
export default App;
