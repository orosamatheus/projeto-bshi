import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Details() {
    let { id } = useParams();
    console.log(id)

    useEffect(() => {

        async function getAnime() {
            const data = await fetch(
                `https://api.jikan.moe/v3/anime/${id}`
            ).then((res) => res.json());

            console.log(data);
        }

        getAnime()

    }, [])


    return (
        <h1>Details</h1>
    )
}