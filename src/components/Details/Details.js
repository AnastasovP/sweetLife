import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import * as likeService from '../../services/likeService';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog';

import useRecipeState from '../../hooks/useRecipeState';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const { recipeId } = useParams(); // destructuring
    const [recipe, setRecipe] = useRecipeState(recipeId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        likeService.getRecipeLikes(recipeId)
            .then(likes => {
                setRecipe(state => ({ ...state, likes }))
            })
            .catch(err => {
                console.log(err) 
            })
    }, [recipeId, setRecipe]);


    const deleteHandler = (e) => {
        e.preventDefault();
        recipeService.remove(recipeId, user.accessToken) // do not forget to take the token!!
            .then(() => {
                setShowDeleteDialog(false);
                navigate('/');
            })
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);

    }

    const likeButtonClick = () => {
        if (user._id === recipe._ownerId) {
            addNotification('You cannot like your own recipe!')
            return;
        }
        if (recipe.likes.includes(user._id)) {
            addNotification('You cannot like the same recipe twice!')
            return;
        }

        likeService.like(user._id, recipeId)
            .then((res) => {
                setRecipe(state => ({ ...state, likes: [...state.likes, res.userId] }))
                addNotification('Successfully liked this delicious recipe', types.success)
                console.log('liked')
            });

    };

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <section id="details-page" className="details">
                <div className="recipe-information">
                    <h3>Name: {recipe.name}</h3>
                    <p className="category">Category: {recipe.category}</p>
                    <p className="img"><img src={recipe.imageUrl} alt="recipeImg" /></p>
                    <div className="actions">
                        {user._id && (user._id === recipe._ownerId
                            ? <>
                                <Link className="button" to={`/edit/${recipe._id}`}>Edit</Link>
                                <a className="button" href="/delete" onClick={deleteClickHandler}>Delete</a>
                            </>
                            : <button onClick={likeButtonClick}>Like</button>
                        )}

                        <div className="likes">
                            <img className="hearts" src="/images/heart.png" alt="heart" />
                            <span id="total-likes">Likes: {recipe.likes?.length || 0}</span>
                        </div>

                    </div>
                </div>
                <div className="recipe-description">
                    <h3>Description:</h3>
                    <p>{recipe.description}</p>
                    <h4>Ingredients:</h4>
                    <p>{recipe.ingredients}</p>
                </div>
            </section>
        </>
    );
}
export default Details;