import React, { useState, useEffect } from 'react'
import "./styles.scss"
import api from '../../services/api'
import arrow from "../../assets/arrow.svg"
import logoBackground from "../../assets/logoBackground.svg"


export default function Home() {
  const [anime, setAnime] = useState([])

  useEffect(() => {
    api.get('anime/list/recent').then(response => setAnime(response.data.data))

  }, [])
  console.log(anime)

  return (
    <>
      <div className="backgroundContainer">
        <div className="lineContainer">
          <img alt='logo' src={logoBackground} />
          <p>
            monitore os seus animes<br />
            preferidos, e nao perca mais<br />
            nenhum episódio
          </p>
          <img className='arrow' alt='arrow' src={arrow} />
        </div>
      </div>
      <h1>o que fazer por aqui</h1>
    </>
  )
}