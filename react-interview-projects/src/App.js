//import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-Slider/ImageSlider";
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
        <QrCodeGenerator/>
    </div>
  );
}

export default App;
