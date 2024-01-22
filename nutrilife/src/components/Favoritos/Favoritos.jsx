import { useEffect, useState } from "react";
import { getFavs } from "../../requests/getFavs";
import { getDetail } from "../../requests/getDetail";
import Cardrecipe from "../recipes/cardrecipe/cardrecipe";
import Navbar from "../Navbar/Navbar";
import Notfound from "../notfound/notfound";
import "./Favoritos.css"
const Favoritos = () => {
  const [favs, setFavs] = useState([]);
  const [favIds, setFavIds] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);

  const isLoged = localStorage.getItem("estaLogeado");

  useEffect(() => {
    const fetchData = async () => {
      const email = localStorage.getItem('userEmail');
      const favsData = await getFavs(email);

      setFavs(favsData.data);
  
      const ids = favsData.data.map((fav) => fav.recetaID);
      setFavIds(ids);
      const detailsPromises = ids.map(async (id) => {
        const detailData = await getDetail(id);
        return detailData;
      });
  
      const details = await Promise.all(detailsPromises);
      setRecipeDetails(details);
    };
  
    if (isLoged === "true") {
      fetchData();
    }
  }, [isLoged]);
  
  

  return (
    <>
      <Navbar />
      <div className="card-container">
        {isLoged === "true" ? (
          recipeDetails && recipeDetails.map((recipe) => (
            <Cardrecipe key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <Notfound />
        )}
      </div>
    </>
  );
};

export default Favoritos;
