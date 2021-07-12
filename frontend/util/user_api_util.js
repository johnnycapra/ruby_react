import axios from 'axios';

export const fetchUsers = () => (
    axios({
        url: `api/users`,
        method: 'GET'
    })
)

export const signUp = (user) => (
    axios({
        url: `api/users`,
        method: 'POST',
        data: { user }
    })
)