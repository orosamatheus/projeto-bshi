import React from 'react'
import "./styles.scss"

import arrow from "../../assets/arrow.svg"
import logoBackground from "../../assets/logoBackground.svg"


export default function Home() {
  return (
    <div className="backgroundContainer">
      <div className="lineContainer">
        <img alt='logo' src={logoBackground} />
        <p>
          monitore os seus animes<br />
          preferidos, e nao perca mais<br />
          nenhum episódio
        </p>
        <img className='arrow' alt='arrow' src={arrow}/>
      </div>
    </div>
  )
}