import Login from "./components/Login"
import Todo from "./components/Todo"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Welcome from "./components/welcome"
import ErrorPage from "./components/ErrorPage"

function Base(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/welcome" element={<Welcome />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}
export default Base