//import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-Slider/ImageSlider";
import Class_Component from "./components/interview-practice-questions/Class_Component";
import { JSX } from "./components/interview-practice-questions/JSX";
import LightDarkMode from "./components/LightDarkTheme";
import LoadMore from "./components/load-More";
import QrCodeGenerator from "./components/QR-CODE";
import RandomColor from "./components/random-color";
import StartRating from "./components/star rating";
import TreeView from "./components/tree-view-sideMenu";
import menus from "./components/tree-view-sideMenu/data";
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
      {/* <TreeView menus  = {menus}/> */}

      {/* Qr code generator */}
        {/* <QrCodeGenerator/> */}

        {/* <JSX/> */}
        {/* <Class_Component/> */}

        {/* Light-Dark-Theme*/}
        <LightDarkMode/>
    </div>
  );
}

export default App;
