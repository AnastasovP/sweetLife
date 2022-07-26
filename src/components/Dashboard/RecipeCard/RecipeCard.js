import { Link } from 'react-router-dom';
const RecipeCard = ({
    recipe
}) => {

    return (
        <li className="otherRecipe">
            <h3>Name: {recipe.name}</h3>
            <p>Category: {recipe.category}</p>
            <p className="img"><img src={recipe.imageUrl} /></p>
            <Link className="button" to={`/details/${recipe._id}`}>Details</Link>
        </li>
    );

}
export default RecipeCard;