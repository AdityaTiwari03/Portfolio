import Img from "./Comp/img";
import "./App.css";
import Info from "./Comp/Info";
import MiddleSection from "./Comp/Main";
import UpTab from "./Comp/Tab";
function App() {
  return (
    <div className="App">
      <UpTab />
      <Info />
      <Img /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
      <br /> <br /> <br /> <br />
      <MiddleSection />
    </div>
  );
}

export default App;
