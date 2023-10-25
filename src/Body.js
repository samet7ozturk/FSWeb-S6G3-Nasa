import "./App.css";
import Goruntu from "./Goruntu";

function Body({ apodData }) {
  return (
    <div className="Body">
      <Goruntu apodData={apodData} />
      {console.log("body:", apodData)}
    </div>
  );
}

export default Body;
