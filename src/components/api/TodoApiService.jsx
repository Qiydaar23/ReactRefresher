import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveAllTodosForUsername = (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodoForUser = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveTodo = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)



