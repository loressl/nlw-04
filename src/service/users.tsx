import { AxiosError, AxiosResponse } from 'axios'
import apiInstance from './api'

export async function getUser(username: String) {
    try {
        const response = await apiInstance.get<AxiosResponse>(`/users/${username}`)
        const data = response.data
        return data
    } catch (error) {
        if(error && error.response){
            const axiosError = error as AxiosError
            return axiosError.response.data
        }

        throw error
    }
}