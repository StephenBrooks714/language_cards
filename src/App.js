import './App.css';
import ReactLogo from "../src/components/assets/react.svg"
import Card from "../src/components/Card/Card"

function App() {
  return (
    <>
    <div className={"container"}>
      <div className="row justify-content-center align-items-center text-center d-flex" style={{ marginTop: "60px", marginBottom: "60px" }}>
        <div className={"col-lg-6"}>
          <img src={ReactLogo} className={"img-fluid"} alt="react logo"/>
          <div className={"card p-2 mt-3 bg-warning"}>
            <h1 className={"text-white-50"}>Languages</h1>
            <div className={"row"}>
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
