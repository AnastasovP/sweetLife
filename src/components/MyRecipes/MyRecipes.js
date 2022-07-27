import { useState, useEffect } from 'react';
import RecipeList from '../Dashboard/RecipeList/RecipeList';
import * as recipeService from '../../services/recipeService';
import { useAuthContext } from '../../contexts/AuthContext';

const MySweets = () => {

    const { user } = useAuthContext()

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        recipeService.getMyRecipes(user._id)
            .then(recipeResult => {
                setRecipes(recipeResult);
            });
    }, [user._id]);

    return (
        <section id="my-recipes-page" className="my-recipes">
            <h1>My Recipes</h1>

            <RecipeList recipes={recipes} />

        </section>
    );
    
}
export default MySweets;