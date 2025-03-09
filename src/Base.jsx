import Login from "./components/Login"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Welcome from "./components/welcome"
import ErrorPage from "./components/ErrorPage"
import ListToDos from "./components/ListToDos"
import Logout from "./components/Logout"
import Header from "./components/Header"
import Footer from "./components/Footer"


function Base(){
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/welcome/:username" element={<Welcome />}/>
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/todoList" element={<ListToDos/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>

    )
}
export default Base