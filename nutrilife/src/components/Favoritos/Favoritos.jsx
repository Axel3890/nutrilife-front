
import { useEffect, useState } from "react";
import { getFavs } from "../../requests/getFavs";
import Cardrecipe from "../recipes/cardrecipe/cardrecipe";
const Favoritos = () => {
    const [favs, setFavs] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const email = "axelgo.sosa@gmail.com";
            const favs = await getFavs(email);
            setFavs(favs.data);
        };
        fetchData();
    }, []);


    return(
        <div>
<p>Hola</p>
        </div>
    )
}

export default Favoritos;