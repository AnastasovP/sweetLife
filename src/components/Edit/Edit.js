import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import useRecipeState from '../../hooks/useRecipeState';

import * as recipeService from '../../services/recipeService';

const categories = [
    { value: '', text: '--Choose an option--' },
    { value: 'cake', text: 'Cake' },
    { value: 'cookie', text: 'Cookie' },
    { value: 'pie', text: 'Pie' },
    { value: 'muffin', text: 'Muffin' },
    { value: 'sweets', text: 'Sweets' }
];

const Edit = () => {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe] = useRecipeState(recipeId);
    const [errors, setErrors] = useState({ name: null, description: null, ingredients: null })
    const [selected, setSelected] = useState(categories[0].value);

    const handleChange = (e) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    };

    const recipeEditSubmitHandler = (e) => {
        e.preventDefault();
        let recipeData = Object.fromEntries(new FormData(e.currentTarget));
        recipeService.update(recipe._id, recipeData);
        navigate(`/details/${recipeId}`)

    }
    // for validation, the best is to create an EditHelper.js if enough time
    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({ ...state, name: 'Your name should be at least 3 characters' }))
        } else {
            setErrors(state => ({ ...state, name: null }))
        }
    };

    const descriptionChangeHandler = (e) => {
        let currentDescription = e.target.value;
        if (currentDescription.length < 40) {
            setErrors(state => ({ ...state, description: 'The description should be at least 40 characters' }))
        } else {
            setErrors(state => ({ ...state, description: null }))
        }
    };

    const ingredientsChangeHandler = (e) => {
        let currentIngredients = e.target.value;
        if (currentIngredients.length < 20) {
            setErrors(state => ({ ...state, ingredients: 'The ingredients needed should be at least 20 characters long' }))
        } else {
            setErrors(state => ({ ...state, ingredients: null }))
        }
    };

    const isValid = !Object.values(errors).some(x => x);

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={recipeEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Recipe</legend>

                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{ borderColor: errors.name ? 'red' : 'inherit' }}>
                            <input type="text" name="name" id="name" defaultValue={recipe.name}
                                onBlur={nameChangeHandler} />
                        </span>
                        <span style={{ display: errors.name ? 'inline' : 'hidden' }}>{errors.name}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input" style={{ borderColor: errors.description ? 'red' : 'inherit' }}>
                            <textarea name="description" id="description" defaultValue={recipe.description}
                                onBlur={descriptionChangeHandler}
                        />
                        </span>
                        <span style={{ display: errors.description ? 'inline' : 'hidden' }}>{errors.description}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input" style={{ borderColor: errors.ingredients ? 'red' : 'inherit' }}>
                            <textarea name="ingredients" id="ingredients" defaultValue={recipe.ingredients}
                                onBlur={ingredientsChangeHandler}
                        />
                        </span>
                        <span style={{ display: errors.ingredients ? 'inline' : 'hidden' }}>{errors.ingredients}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={recipe.imageUrl} />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="category">Category</label>
                        <span className="input">
                            <select id="category" name="category" value={selected} onChange={handleChange}>
                                {categories.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>

                    <input className="button submit" type="submit" disabled={!isValid} value="Save" />
                </fieldset>
            </form>
        </section>
    );
}
export default Edit;