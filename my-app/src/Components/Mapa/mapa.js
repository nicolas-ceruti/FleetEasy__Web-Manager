import React, { useState} from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'react-pro-sidebar/dist/css/styles.css';
import "./mapa.css"

const Mapa = () => {

  const [lat, setLat] = useState(-26.82541425863236);
  const [long, setLong] = useState(-49.2724817183922);
  
  const position = [lat, long]


  function setLocation(){
    setLat(lat);
    setLong(long);
  }

  return(
    <>


     <div className='entradas'>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>

    
    {/* <div className='input-lat'>
      <input type='text'  
      //onKeyPress={(event) => { if (!/["0-9", "."]/.test(event.key)) { event.preventDefault(); } }} 
      onChange={(e) => setLat(parseFloat(e.target.value))}/>  
    </div>  

    <div className='input-long'>
      <input type='text' 
      onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} 
      onChange={(e) => setLong(parseFloat(e.target.value))}/>
    </div> 

    
    <button className="button-location"  onClick={setLocation}>Localizar</button> */}
    
    </div> 
    

    
    </>

  );

}

export default Mapa;