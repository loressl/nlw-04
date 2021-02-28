import apiInstance from './api'

export async function getUser(username) {
    const response = await apiInstance.get(`/users/${username}`)
        .catch(() => { return "error" })
    
    return response
}