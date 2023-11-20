import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [data,setData]=useState({})
  const [location,setLocation] =useState('')

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=895284fb2d2c50a520ea537456963d9c'

const searchLocation=(event) =>{
  if(event.key==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
}

  return (
    <div className="App">
      <div className="search">
        <input value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            <h1>{data && data.main?.temp}°F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom">
            <div className="feels">
            
              <p lassName='bold'>65°</p>
              <p>Feels Likely</p>
            </div>
            <div className="humidity">
              <p className='bold'>20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>12 MPH</p>
              <p>Wind SPeed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
