
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

    console.log(favs)
    return(
        <div>
            {favs && favs.map((recipe) => (
          <Cardrecipe key={recipe.id} recipe={recipe} />
        ))}
        </div>
    )
}

export default Favoritos;