import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import './styles.scss'


export default function Details() {
    let { id } = useParams();
    const [anime, setAnime] = useState({});

    useEffect(() => {

        async function getAnime() {
            const data = await fetch(
                `https://api.jikan.moe/v3/anime/${id}`
            ).then((res) => res.json());

            setAnime(data);

        }
        getAnime()
    }, [])

    console.log(anime)

    return (
        <>
            <div className="detailContainer">
                <div className="imgContainer">
                    <img alt='cover' src={anime.image_url} />
                </div>
                <div className="textContainer">
                    <h1 className='nome'>Nome do anime: {anime.title}</h1>
                    <div className="sinopse">
                        <h1>Sinopse:</h1>
                        <p>{anime.synopsis}</p>
                    </div>
                </div>
            </div>
            <div className='outrasInformações'>
                <h2>Episódios: {anime.episodes}</h2>
                <h2>Status: {anime.status}</h2>
                <h2>Duração: {anime.duration} </h2>
                <h2>Origem: {anime.source}</h2>
                <h2>Score: {anime.score}</h2>
                <h2>Estrelas: {anime.favorites} </h2>
                <h2>Trailer: <a href={anime.trailer_url}>Ver Trailer</a></h2>
            </div>
        </>
    )
}