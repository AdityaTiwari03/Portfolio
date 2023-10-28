import "./App.css";
import Info from "./Comp/Info";
import MiddleSection from "./Comp/Main";
import UpTab from "./Comp/Tab";
function App() {
  return (
    <div className="App">
        <UpTab />
      <div className="container-fluid">
        <Info /> 
        <MiddleSection />
      </div>
    </div>
  );
}

export default App;
