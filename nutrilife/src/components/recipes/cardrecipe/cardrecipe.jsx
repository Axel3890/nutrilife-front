 import "./cardrecipe.css"
 import { Link } from "react-router-dom"
 
 const Cardrecipe = ({recipe}) => {
    return(
        <article class="cardrecipe">
            <Link to={`/detail/${recipe.id}`}>
            <div class="card-int">
                <span class="card__span">Category</span>
                <div class="img">
                    <img src={recipe.image}></img>
                </div>
                <div class="card-data">
                <p class="title">{recipe.label}
                </p><p>{recipe.label}</p>
                <button class="buttoncard">More info</button>
                </div>
            </div>
         </Link>
        </article>
    )
 }


 export default Cardrecipe;