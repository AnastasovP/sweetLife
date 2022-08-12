import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';

import { useAuthContext } from '../../contexts/AuthContext';

const Create = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({ name: null, description: null, ingredients: null })

    const nameHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 3) {
            setErrors(state => ({ ...state, name: 'The name of the recipe should be at least 3 characters long' }))
        } else {
            setErrors(state => ({ ...state, name: null }))
        }
    };

    const descriptionHandler = (e) => {
        let currentDescription = e.target.value;
        if (currentDescription.length < 40) {
            setErrors(state => ({ ...state, description: 'The description should be at least 40 characters long' }))
        } else {
            setErrors(state => ({ ...state, description: null }))
        }
    };

    const ingredientsHandler = (e) => {
        let currentIngredients = e.target.value;
        if (currentIngredients.length < 20) {
            setErrors(state => ({ ...state, ingredients: 'The ingredients needed should be at least 20 characters long' }))
        } else {
            setErrors(state => ({ ...state, ingredients: null }))
        }
    };

    const onRecipeCreate = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let category = formData.get('category');
        let ingredients = formData.get('ingredients');
        recipeService.create({
            name,
            description,
            imageUrl,
            category,
            ingredients
        }, user.accessToken) 
            .then(result => {
                navigate('/')
            })
            .catch(err => {
                console.log(err) 
            })
    }

    const isValid = !Object.values(errors).some(x => x);

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onRecipeCreate} method="POST">
                <fieldset>
                    <legend>Create recipe</legend>

                    <p className="field">
                        <label htmlFor="name">Name:</label>
                        <span className="input" style={{ borderColor: errors.name ? 'red' : 'inherit' }}>
                            <input type="text" name="name" id="name" placeholder="Please enter the name 
                            of your recipe here" onBlur={nameHandler}
                            />
                        </span>
                        <span style={{ display: errors.name ? 'inline' : 'hidden' }}>{errors.name}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="description">Description:</label>
                        <span className="input" style={{ borderColor: errors.description ? 'red' : 'inherit' }}>
                            <textarea name="description" id="description" placeholder="Please enter the 
                            description here" onBlur={descriptionHandler}
                            />
                        </span>
                        <span style={{ display: errors.description ? 'inline' : 'hidden' }}>{errors.description}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="ingredients">Ingredients:</label>
                        <span className="input" style={{ borderColor: errors.ingredients ? 'red' : 'inherit' }}>
                            <textarea name="ingredients" id="ingredients" placeholder="Please enter the 
                            ingredients needed here" onBlur={ingredientsHandler}
                            />
                        </span>
                        <span style={{ display: errors.ingredients ? 'inline' : 'hidden' }}>{errors.ingredients}</span>
                    </p>

                    <p className="field">
                        <label htmlFor="image">Image:</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Please upload an image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="category">Category:</label>
                        <span className="input">
                            <select id="category" name="category">
                                <option value="">--Choose an option--</option>
                                <option value="cake">Cake</option>
                                <option value="cookie">Cookie</option>
                                <option value="pie">Pie</option>
                                <option value="muffin">Muffin</option>
                                <option value="sweets">Sweets</option>
                            </select>
                        </span>
                    </p>

                    <input className="button submit" type="submit" disabled={!isValid}
                        value="Create your recipe" />
                </fieldset>
            </form>
        </section>
    );
}
export default Create;