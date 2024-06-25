
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StartRating from './components/star rating';
function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
      {/* <Accordian/> */}

      {/* Random Color component */}
      {/* <RandomColor/> */}

      {/* star rating component */}
      <StartRating noOfStarts={10}/>
    </div>
  );
}

export default App;
