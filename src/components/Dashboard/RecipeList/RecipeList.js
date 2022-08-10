import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard'


const RecipeList = ({
    recipes
}) => {


    return (
        <>
            {recipes.length > 0
                ? <ul className="other-recipes-list">
                    {recipes.map(x => <RecipeCard key={x._id} recipe={x} />)}
                </ul>
                : <p className="no-recipes">No recipes in database! <Link to="/create">Create the first one</Link></p>
            }

        </>
    );
}
export default RecipeList;
