import axios from 'axios';

export const fetchUsers = () => (
    axios({
        method: 'GET',
        url: `api/users`
    })
)

export const fetchUser = userId => (
    axios({
        method: 'GET',
        url: `api/users/${userId}`
    })
)

export const signUp = (user) => (
    axios({
        method: 'POST',
        url: `api/users`,
        data: { user }
    })
)