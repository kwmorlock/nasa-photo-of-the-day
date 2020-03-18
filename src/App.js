import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  //state hook
  const [data, setData] = useState();
  //use effect
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('wow', error)
    })
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
