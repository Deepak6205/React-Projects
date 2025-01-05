//import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-Slider/ImageSlider";
import Class_Component from "./components/interview-practice-questions/Class_Component";
import Functional_Component from "./components/interview-practice-questions/Functional_Component";
import { JSX } from "./components/interview-practice-questions/JSX";
import LightDarkMode from "./components/LightDarkTheme";
import LoadMore from "./components/load-More";
import QrCodeGenerator from "./components/QR-CODE";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StartRating from "./components/star rating";
import TreeView from "./components/tree-view-sideMenu";
import menus from "./components/tree-view-sideMenu/data";
import Hello from "./components/tree-view-sideMenu/hrllo/Hello";
function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian/> */}

      {/* Random Color component */}
      {/* <RandomColor/> */}

      {/* star rating component */}
      {/* <StartRating numberOfStars={10}/> */}

      {/* ImageSlider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"30"}
      /> */}

      {/* Load-More component */}
      {/* <LoadMore/> */}

      {/* side menu tree view */}
      {/* <TreeView menus  = {menus}/>
      <Hello/> */}

      {/* Qr code generator */}
        {/* <QrCodeGenerator/> */}

        {/* <JSX/> */}
        {/* <Class_Component name = "superman" age = {500}/> */}

        {/* <Functional_Component name = {"deepak"}/> */}

        {/* Light-Dark-Theme*/}
        {/* <LightDarkMode/> */}
        {/* scroll indicator component */}
        <ScrollIndicator url={'https://dummyjson.com/products?limit=194'}/>
    </div>
  );
}

export default App;
