import axios from "axios"

// export function getHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldBeab = () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)

// export const retrieveHelloWorldBeab = () => axios.get('http://localhost:8080/hello-world-bean')

// export const retrieveHelloWorldPathVariable = (username) => axios.get(`http://localhost:8080/hello-world/path-variable/${username}`)




// const apiClient = axios.create(
//     {
//         baseURL: 'http://localhost8080'
//     }
// // )

// export const retrieveAllTodosForUsername = (username) => apiClient.get(`/users/${username}/todos`)
// export function retrieveHelloWorldBeab(){
//    return axios.get('http://localhost:8080/hello-world-bean')
// }
