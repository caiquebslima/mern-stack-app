import axios from 'axios'

const API_URL = '/api/goals/'

const user = JSON.parse(localStorage.getItem('user'))
const config = {
    headers: { Authorization: `Bearer ${user.token}` },
}

const getGoals = async goals => {
    const response = await axios.get(API_URL, config)

    return response.data
}

const createGoal = async (goal, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    const response = await axios.post(API_URL, goal, config)

    return response.data
}
const deleteGoal = async (id, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    const response = await axios.delete(API_URL + id, config)

    return response.data
}

const goalsService = {
    getGoals,
    createGoal,
    deleteGoal,
}

export default goalsService
