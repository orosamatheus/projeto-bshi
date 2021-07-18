import React, { useState, useEffect } from 'react'
import "./styles.scss"

import Footer from "../../components/Footer"

import arrow from "../../assets/arrow.svg"
import logoBackground from "../../assets/logoBackground.svg"
import dragon from "../../assets/dragon.svg"
import fire from "../../assets/fire.svg"
import infinite from "../../assets/infinite.svg"
import seta from '../../assets/seta.svg'



import { Link } from 'react-router-dom'


export default function Home() {

  const [animes, setAnimes] = useState([]);
  

  useEffect(() => {
    async function getAnimes() {
      const data = await fetch(
        `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      ).then((response) => response.json());
  
      setAnimes(data.top.slice(0, 7));
    };
    getAnimes();
   
  }, []);



  return (
    <>
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
          <img alt='icon' src={fire} />
          <p>
            <span>Os Melhores</span><br />
            Veja o que esta<br />
            pegando fogo, no<br />
            mundo dos animes.<br />
            Os animes mais<br />
            bem avaliados pela<br />
            galera!
          </p>
        </div>
        <div className='option2'>
          <img alt='icon' src={infinite} />
          <p>
            <span>Informações</span><br />
            Procure informações<br />
            dos seus animes<br />
            preferidos.
          </p>
        </div>
        <div className='option3'>
          <img alt='icon' src={dragon} />
          <p>
            <span>Sua Lista</span><br />
            Comece agora mesmo<br />
            a montar sua lista de<br />
            animes preferidos, e<br />
            seja notificado<br />
            quando um episódio<br />
            novo for ao ar!
          </p>
        </div>
      </div>
      <div className="listAnimes">
        <img alt='ico' src={infinite} />
        <h3>Veja Animes</h3>
      </div>
      <ul className="Animes">
        {
          animes.map((anime) => (

            <li key={anime.mal_id}>
              <img className='animeCover' alt='cover' src={anime.image_url} />
                <h3>Nome: {anime.title} </h3>
                <div className='lineContainer'>
                  <h3>Episódios: {anime.episodes}</h3>
                  <h3>Estrelas: **</h3>
                </div>
                <Link to={`/details/${anime.mal_id}`}><img className='seta' alt='seta' src={seta}/></Link>
            </li>
          ))
        }
      </ul>
      <Footer/>
    </div>
 
    </>
  )
}