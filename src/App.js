import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home/home";
import Fact from "./components/Facts/Fact";
import SpecificFact from "./components/SpecificFact/SpecificFact";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';


function App() {
  const [anime, setAnime] = useState(null);
  const url = "https://anime-facts-rest-api.herokuapp.com/api/v1";

  useEffect(()=>{
     axios.get(url)
     .then(response => {
      setAnime(response.data);
     })
  }, [url])
   
  if(anime){
  return (
    <div className="app">
      <Router>
        <Routes>

        <Route path="/" element={<Home anime={anime}/>} />
        <Route path ='/facts/:animeName' element = {<Fact/>} />
        <Route path = "/facts/:animeName/:factId" element = {<SpecificFact/>} />
        
          
        </Routes>
      </Router>
    </div>

  );
  }
  return (<div></div>);
}

export default App;
