import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Goruntu from "./Goruntu";

function App() {
  const [apodData, setApodData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Zeh2jmucMoOtzd71ymHPU1kNDmWQZbdl5vbVeJg3&date=2023-02-02`
      )
      .then((response) => {
        setApodData(response.data.url);
        console.log("app: ", response.data.url);
      })
      .catch((error) => {
        console.error("Error fetching APOD data: ", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Body apodData={apodData} />
      <Footer />
    </div>
  );
}

export default App;
