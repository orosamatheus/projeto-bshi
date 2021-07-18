import React, { useState, useEffect, createContext } from "react";


const Context = createContext();

function AnimeDetailProvider({ children }){
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAnimes();
   
  }, []);


  async function getAnimes() {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((response) => response.json());

    setAnimes(data.top.slice(0, 7));
  };




  const value = {
    animes
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export { Context, AnimeDetailProvider }