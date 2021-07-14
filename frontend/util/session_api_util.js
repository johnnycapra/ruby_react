import axios from 'axios';

export const signUp = (user) => (
    axios({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
)

export const logIn = (user) => (
    axios({
        method: 'POST',
        url: 'api/session',
        data: { user }
    })
)

export const logOut = () => (
    axios({
        method: 'DELETE',
        url: 'api/session'
    })
)

