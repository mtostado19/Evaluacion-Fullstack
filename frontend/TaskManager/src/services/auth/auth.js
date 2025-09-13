import axios from 'axios'

export const login = async (req) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/login/', req)
        return res.data
    } catch(err) {
        throw err
    }
}

export const register = async (req) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/register/', req)
        return res.data
    } catch(err) {
        throw err
    }
}