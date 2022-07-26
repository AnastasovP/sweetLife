import * as request from './requester';

const baseUrl = 'http://localhost:3030/data'; // without jsonstore otherwise no ownerId!!!!!!!!!!!

export const getAll = async () => {
    let response = await request.get(`${baseUrl}/recipes?sortBy=_createdOn%20desc`) //pets?sortBy=_createdOn%20desc

    let result = Object.values(response); // do not forget to return the values!!!!!

    return result;
};

export const getMyRecipes = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`)
    return request.get(`${baseUrl}/recipes?where=${query}`)
};

export const create = async (recipeData, token) => { // token here is not good, only temporary solution
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...recipeData, likes: [] })
    });
    let result = await response.json();
    return result
};

export const update = (recipeId, recipeData) => {
    request.put(`${baseUrl}/recipes/${recipeId}`, recipeData)
};

export const getOne = (recipeId) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`)
        .then(res => res.json())
};

export const remove = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};




