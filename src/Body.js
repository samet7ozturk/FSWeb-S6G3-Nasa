import "./App.css";
import Goruntu from "./Goruntu";
import Input from "./Input";

function Body({ apodData, date, inputDegistir }) {
  return (
    <div className="Body">
      <Goruntu apodData={apodData} />
      <Input date={date} inputDegistir={inputDegistir} />
      {console.log("body:", apodData)}
    </div>
  );
}

export default Body;
