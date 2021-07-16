import React, { useState, useEffect } from 'react'
import "./styles.scss"
import api from '../../services/api'

import arrow from "../../assets/arrow.svg"
import logoBackground from "../../assets/logoBackground.svg"
import dragon from "../../assets/dragon.svg"
import fire from "../../assets/fire.svg"
import infinite from "../../assets/infinite.svg"


export default function Home() {
  const [animes, setAnime] = useState([])

  useEffect(() => {
 
    api.get('anime/list/recent?limit=10').then(response => setAnime(response.data.data))

  }, [])
  console.log(animes)

  return (
    <div className="contentContainer">
      <div className="backgroundContainer">
        <div className="lineContainer">
          <img className='logoBackground' alt='logo' src={logoBackground} />
          <p>
            monitore os seus animes<br />
            preferidos, e nao perca mais<br />
            nenhum episódio
          </p>
          <img className='arrow' alt='arrow' src={arrow} />
        </div>
      </div>
      <h1 className='whatYouDo'>o que fazer por aqui?</h1>
      <div className="options">
        <div className='option1'>
          <img alt='icon' src={fire}/>
          <p>
          <span>Os Melhores</span><br/>
          Veja o que esta<br/> 
          pegando fogo, no<br/> 
          mundo dos animes.<br/> 
          Os animes mais<br/> 
          bem avaliados pela<br/> 
          galera!
          </p>
        </div>
        <div className='option2'>
          <img alt='icon' src={infinite}/>
          <p>
          <span>Informações</span><br/>
          Procure informações<br/>
          dos seus animes<br/>  
          preferidos.
          </p>
        </div>
        <div className='option3'>
          <img alt='icon' src={dragon}/>
          <p>
          <span>Sua Lista</span><br/>
          Comece agora mesmo<br/>
          a montar sua lista de<br/> 
          animes preferidos, e<br/>
          seja notificado<br/>
          quando um episódio<br/>
          novo for ao ar!
          </p>
        </div>
      </div>
      <div className="listAnimes">
        <img alt='ico' src={infinite}/>
        <h3>Veja Animes</h3>
      </div>
      <ul className="Animes">
        {
          animes.map((anime) =>(
            
            <li key ={anime.vid_id}>
              <img alt='cover' src={anime.cover}/>
              <a href='/details'>Nome: {anime.title} </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}