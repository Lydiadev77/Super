import React,{useState,useEffect} from 'react'
import "./main.css";
import axios from "axios";

const Main =()=>{
    const [data, setData] = useState();
    const [name, setName] = useState("");

    const [combat, setCombat] = useState();
    const [durability, setDurability] = useState();
    const [intelligence, setIntelligence] = useState();
    const [power, setPower] = useState();
    const [speed, setSpeed] = useState();
    const [strength, setStrength] = useState();
    const [fullname, setFullname] = useState();
    const [gender, setGender] = useState();
    const [race, setRace] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [occupation, setOccupation] = useState();
    const [base, setBase] = useState();
 
    const[button, setButton] = useState("");
    const [img,setImg]=useState();
    const[id,setId] =useState();
     useEffect(() => {
      axios
        .get(`https://www.superheroapi.com/api.php/848351232588752/search/${button}`)
        .then((response) => {setData(response)
          setId(response.data.results[0].id)
           setImg(response.data.results[0].image.url)
           setFullname(response.data.results[0].name)
           setCombat(response.data.results[0].powerstats.combat)
           setDurability(response.data.results[0].powerstats.durability)
           setIntelligence(response.data.results[0].powerstats.intelligence)
           setPower(response.data.results[0].powerstats.power)
           setSpeed(response.data.results[0].powerstats.speed)
           setStrength(response.data.results[0].powerstats.strength)
           setGender(response.data.results[0].appearance.gender)
           setRace(response.data.results[0].appearance.race)
           setHeight(response.data.results[0].appearance.height)
           setWeight(response.data.results[0].appearance.weight)
           setOccupation(response.data.results[0].work.occupation)
           setBase(response.data.results[0].work.base)
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
  <button type="button" className="button" onClick={handleclick}>Search</button>
  </div>
  {button === "" ? <h1>.</h1> : <div className='fetch'>
    <img src={img}/>
    <div className="property">
    <h3 className="name"> Name: {fullname}</h3>
        <table id="heroes">
            
            <tr>
                <td>Combat: {combat}</td>
                <td>Durability: {durability}</td>
                <td>Intelligence: {intelligence}</td>
                <td>Power: {power}</td>
                <td>Speed: {speed}</td>
                <td>Strength: {strength}</td>
            </tr>
            <tr>
                <td> Gender: {gender}</td>
                <td>Race: {race}</td>
                <td>Height: {height}</td>
                <td>Weight: {weight}</td>
                <td colspan="2">Occupation: {occupation}</td>
                
            </tr>
           
            </table>
           <h5><u>Work base:</u></h5> <p>{base}</p> 
    </div>
    
</div>}

</div>
);
}

export default Main;
