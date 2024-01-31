import './App.css';
import Assignment1 from './Assignment1/Main'
import Assignment2 from './Assignment2/Main'
import Assignment3 from './Assignment3/Main'
import Assignment5 from './Assignment5/Main'

function App() {
  return (
    <div>
      <Assignment1/>
      <Assignment2/>
      <Assignment3/>
      <h1 style={{textAlign:"center",borderBottom:"solid 5px red",paddingBottom:"5px"}}>Assignment4 is part of Resume Builder App</h1>
      <Assignment5/>
    </div>
  );
}

export default App;
