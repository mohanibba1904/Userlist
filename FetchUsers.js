import React, { useState } from "react";
import DisplayUser from './components/DisplayUser'
import './fetchusers.css'

function FetchUsers() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    number: "",
  });

  async function weatherData(e) {
    e.preventDefault();
    if (form.number === "") {
      alert("Enter Random Number");
    } else {
      const data = await fetch(
        `https://reqres.in/api/users?page=${form.number}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({data: data});
    }
    
  }

  const handleChange = (e) => {
    let value = e.target.value;
      setForm({ ...form, number: value });
     console.log(value) 
  };
  return (
    <div className="users">
      <span className="title">Users Lists</span>
      <br />
      <form>
        <input
        className="inputclass"
          type="number"
          placeholder="Enter a random number"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
       
        <button className="getbutton" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>
      
      {weather.data !== undefined ? (
        <div className="users">
          <DisplayUser data={weather.data} />
          
        </div>
      ) : null}
     
    </div>
  );
}


export default FetchUsers
