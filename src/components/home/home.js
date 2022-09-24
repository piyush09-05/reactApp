import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import './home.css';
import Fact from "../Facts/Fact";


const moveToFacts = (event) => {
   const nameOfAnime = event.target.innerHTML;
   console.log(nameOfAnime);
   return(
    <div>
     <Routes>
     <Route path ='/facts/:animeName' element = {<Fact/>} />
     </Routes>
    </div>
   )
}
function Home (anime){
   
    const animeItems = anime.anime.data.map((element) => {
        return (
            <div className="container">
            
            <div className="animeDisplay" >
               <img className="animeImage" src={element.anime_img} alt="" />
               <div className="animeDesc">
                  <h1 className="animeId">{element.anime_id}. </h1>
                  <Link to = {'/facts/'+ element.anime_name.toString()} >
                      <h1  className="animeTitle" >{element.anime_name}</h1>
                  </Link>
                </div>
                
                
            </div>
            </div>
        )
    })
    return (
        <div className="home">
           {animeItems}
        </div>
    );
    
}
export default Home;