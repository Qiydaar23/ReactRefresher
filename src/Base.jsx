import Login from "./components/Login"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Welcome from "./components/welcome"
import ErrorPage from "./components/ErrorPage"
import ListToDos from "./components/ListToDos"

function Base(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/welcome" element={<Welcome />}/>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/todoList" element={<ListToDos/>}/>
                </Routes>
            </BrowserRouter>
        </>

    )
}
export default Base