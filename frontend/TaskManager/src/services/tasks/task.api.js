import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/tasks/'

export async function getUserTasks(token, id) {
    const res = await axios.get(`http://127.0.0.1:8000/tasks/userTasks/${id}`, {
        headers: { Authorization: `Token ${token}`}
    })
    return res.data
}

export async function postTask(token, body) {
    const res = await axios.post(`${API_URL}`, body, {
        headers: { Authorization: `Token ${token}` }
    })
    return res.data
}

export async function putTask(token, id, body) {
    const res = await axios.put(`${API_URL}${id}/`, body, {
        headers: { Authorization: `Token ${token}`}
    })
    return res.data
}

export async function deleteTask(token, id) {
    const res = await axios.delete(`${API_URL}${id}/`, {
        headers: { Authorization: `Token ${token}`}
    })
    return res
}