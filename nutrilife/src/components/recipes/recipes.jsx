import Cardrecipe from "./cardrecipe/cardrecipe";
import "./recipes.css"
import { useState } from "react";
import { getRecipes } from "../../requests/getRecipes";



const Recipes = () => {
    //Busqueda por query
    const [query, setQuery] = useState('');
    const [data, setData] = useState();

    const handleInputChange = (event) => {
        const { value } = event.target;
        setQuery(value);
    };

    console.log(query)

    const handleSumbit = async(event) => {
        event.preventDefault();
        try {
        const info = await getRecipes(query)
        setData(info.data)
        } catch (error) {
            alert(error.message);
        }
    }


    //Busqueda random despues

    return(
        <div className="recetas">
    <form onSubmit={handleSumbit}>
    <div class="search">
        <input placeholder="Search..." type="text" onChange={handleInputChange} value={query} name="query"/>
        <button type="submit">Search</button>
      </div>
      </form>

            <div className="cardsrecetas">
            {data && data.map((recipe) => (
          <Cardrecipe key={recipe.id} recipe={recipe} />
        ))}
            </div>
        </div>
    )
}

export default Recipes;