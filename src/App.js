import logo from './logo.svg';
import './App.css';
import images from "./assets/images.webp";

function App() {
  const x=9;
  var text="hello";
  if(x==10){
    text="Equal";
  }
  else{
    text="not equal";
  }
  return <div className='App'>
    <h1>Hello world</h1>
    <p>this is paragraph</p>
    <p>{5+55}</p>
    <img src={images} alt="image"/>
    <h2>{text}</h2>



    <h2>{x>10? "greater":"lesser"}</h2>
    </div>
  
}

export default App;
