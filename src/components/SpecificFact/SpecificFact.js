import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './specificFact.css';



function SpecificFact () {

    const params = useParams();
    const nameOfAnime = params.animeName.toString();
    const idFact = params.factId.toString();

    const url = "https://anime-facts-rest-api.herokuapp.com/api/v1/"+nameOfAnime + "/" + idFact;
    // console.log(url);
    
    const [factData,setFactData] = useState(null);
    
    useEffect(() => {
        axios.get(url)
        .then( response => {
            // console.log(response.data.success);
            // console.log(response.data.data.fact_id);
            // console.log(response.data.data.fact);
            setFactData(response.data);
            console.log(factData);
        })
    },[url]);

    if(factData){
        
            return(
                <div className="factDetails">
                    <h2 className="fact_Id">Fact Id: {factData.data.fact_id} </h2>
                    <h2 className="fact">Fact: {factData.data.fact}</h2>
                </div>
            )
        
        
    }
    return(
        <div >
            <h1 className="Waiting">Please Wait...</h1>
        </div>
    )
    
   
    
    return(
        <div>
         Waiting
        </div>
    )
}
export default SpecificFact;