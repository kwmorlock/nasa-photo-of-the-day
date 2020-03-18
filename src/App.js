import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

function App() {
  //state hook
  const [data, setData] = useState();
  //use effect
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
    .then(response => {
      // console.log(response)
      setData(response.data);
    })
    .catch(error => {
      console.log('wow', error)
    })
  }, [])


  return (
    <div className="App">
      <Header title={data.title}/>
      <Body explanation={data.explanation}
       url={data.url}/>
      {/* <p>
        {setData(data.explanation)}
      </p> */}
      <Footer copyright = {data.copyright}/>
    </div>
  );
}

export default App;
