import React,{useState,useEffect} from 'react'
import "./main.css";
import axios from "axios";

const Main =()=>{
    const [data, setData] = useState();
    const [name, setName] = useState("");
    //Characteristics of searched superhero
    const [combat, setCombat] = useState();
    const [durability, setDurability] = useState();
    const [intelligence, setIntelligence] = useState();
    const [power, setPower] = useState();
    const [speed, setSpeed] = useState();
    const [strength, setStrength] = useState();

    const[button, setButton] = useState("");
    const [img,setImg]=useState();
    const[id,setId] =useState();
     useEffect(() => {
      axios
        .get(`https://www.superheroapi.com/api.php/848351232588752/search/${button}`)
        .then((response) => {setData(response)
          setId(response.data.results[0].id)
           setImg(response.data.results[0].image.url)
           setCombat(response.data.results[0].powerstats.combat)
           setDurability(response.data.results[0].powerstats.durability)
           setIntelligence(response.data.results[0].powerstats.intelligence)
           setPower(response.data.results[0].powerstats.power)
           setSpeed(response.data.results[0].powerstats.speed)
           setStrength(response.data.results[0].powerstats.strength)
        })
        .catch((error) => console.log(error));        
    }, [button]);

    const handleclick=()=>{
        setButton(name);
    }

return(
    
    <div>
     <div className="searchbar">
  <input type="text" placeholder="Enter Name" value={name} onChange={ e => setName(e.target.value) } />
  <br/>
  <button type="button" onClick={handleclick}>Search</button>
  </div>
  {button === "" ? <h1>.</h1> : <div className='fetch'>
    <img src={img}/>
    <div className="property">
        <table>
            <tr><th>Name: {name}</th></tr>
            <tr>
                <td>Combat: {combat}</td>
                <td>Durability: {durability}</td>
                <td>Intelligence: {intelligence}</td>
                <td>Power: {power}</td>
                <td>Speed: {speed}</td>
                <td>Strength: {strength}</td>
            </tr></table>
    </div>
    
</div>}

</div>
);
}

export default Main;
