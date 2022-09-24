import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import './fact.css';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Fact(){
    const params = useParams();
    
    const name = params.animeName.toString();
    const url = "https://anime-facts-rest-api.herokuapp.com/api/v1/"+name;
    // console.log(url);
    
    const [anime, setAnime] = useState(null);

     useEffect( () => {
        axios.get(url)
        .then(async response => {
            
            await setAnime(response.data);
            console.log(anime);
        })}, [url]);

        if(anime){
            const factData = anime.data.map((element) => {
                return (
                    <div className='animeFacts'>
                        <Link to = {'/facts/'+ name + '/' +element.fact_id} >
                             <h3 className="factId">Fact Id: {element.fact_id}. </h3>
                        </Link>
                        
                    </div>
                )
            });
        
           
            return(
                <div className="factDiv">

                 
                    <div className="topBar">
                        <Link to={'/'}><h2 className="homeButton">Home</h2></Link>
                    </div>
                
                    <img className='animeImage' src={anime.img} alt="" />
                    <h3 className="noOfFacts">Number of Facts: {anime.total_facts}</h3> 
                    {factData}
                </div>
            );
           }
           return(
            <div >
                <h1 className="Waiting">Please Wait...</h1>
            </div>
           )
        } 
   
   

export default Fact;