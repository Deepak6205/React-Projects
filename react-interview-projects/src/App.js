import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-Slider/ImageSlider";
import RandomColor from "./components/random-color";
import StartRating from "./components/star rating";
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
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"30"}
      />
    </div>
  );
}

export default App;
