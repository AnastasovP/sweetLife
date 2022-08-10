const baseUrl = 'http://localhost:3030'

export const login = async (email, password) => { 
    let res = await fetch(`${baseUrl}/users/login`, { 
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult
    } else {
        throw jsonResult.message; // not interested in the code, but only in the message
    }
}

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token
        }
    })
        
};

export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, { // return here
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json());
}
