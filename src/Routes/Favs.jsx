import React from "react";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const {Theme} = useContext(ContextGlobal)
  
  const [dentistFav, setDentistFav] = useState([])

  useEffect(() => {
    setDentistFav(JSON.parse(localStorage.getItem('favs')))
  }, [dentistFav])

  const handleClearFavs = (e) => {
    localStorage.clear()
  }

  return (
    <div div className="favs" style={{background:Theme.backgroundHome, color:Theme.color}}>
      <h1>Dentistas Favoritos</h1>
      <button className="buttonDelete" onClick={handleClearFavs}>BORRAR TODOS LOS DENTISTAS</button>
      <div className="card-grid">
        {dentistFav?.map(info => <Card key={info.id} name={info.name} username={info.username} id={info.id}/>)}
      </div>
    </div>

  );
};

export default Favs;
