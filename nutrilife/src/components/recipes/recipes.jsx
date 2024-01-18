import Cardrecipe from "./cardrecipe/cardrecipe";
import "./recipes.css";
import { useState, useEffect, useHistory } from "react";
import { getRecipes } from "../../requests/getRecipes";
import Loader from "../loader/Loader";

import Navbar from "../Navbar/Navbar";

const Recipes = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      const info = await getRecipes(query);
      setIsLoading(true);
      setData(info.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('recipesData');
    setData(storedData ? JSON.parse(storedData) : null);

  }, []);


  useEffect(() => {
    if (data) {
      localStorage.setItem('recipesData', JSON.stringify(data));
    }
  }, [data]);

  const clear = () => {
    localStorage.removeItem('recipesData');
    setData(null)
  }

  return (
    <>
      <Navbar />
      <div className="recetas">
  
        <form onSubmit={handleSumbit}>
          <div className="search">
            <input
              placeholder="Search..."
              type="text"
              onChange={handleInputChange}
              value={query}
              name="query"
            />
            <button type="submit">Search</button>
          </div>
        </form>

        <button class="buttonclose" onClick={clear}>
          <span class="X"></span>
          <span class="Y"></span>
          <div class="close">Clear</div>
        </button>


        {isLoading ? (
          <Loader />
        ) : (
        <div className="cardsrecetas">
          
          {data &&
            data.map((recipe) => (
              <Cardrecipe key={recipe.id} recipe={recipe} />
            ))}
        </div>
        )}
      </div>
    </>
  );
};

export default Recipes;
