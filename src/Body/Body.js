import "../App.css";
import Goruntu from "../Goruntu";
import Input from "../Input";

function Body({ apodData, date, inputDegistir, apodType }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <Goruntu apodData={apodData} apodType={apodType} />
        </div>
        <div className="col-sm-3">
          <Input date={date} inputDegistir={inputDegistir} />
        </div>
      </div>
    </div>
  );
}

export default Body;
