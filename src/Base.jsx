import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/welcome";
import ErrorPage from "./components/ErrorPage";
import ListToDos from "./components/ListToDos";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todo from "./components/Todo";
import AuthProvider, { useAuth } from "./components/AuthContext";

function AuthRoutes({ children }) {
    const authContext = useAuth();
    return authContext.isAuthenticated ? children : <Navigate to="/login" />;
}

function Base() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/welcome/:username" element={
                        <AuthRoutes>
                            <Welcome />
                        </AuthRoutes>
                    } />

                    <Route path="/todoList" element={
                        <AuthRoutes>
                            <ListToDos />
                        </AuthRoutes>
                    } />
                    <Route path="/todo/:id" element={
                        <AuthRoutes>
                            <Todo />
                        </AuthRoutes>
                    } />

                    <Route path="/logout" element={
                        <AuthRoutes>
                            <Logout />
                        </AuthRoutes>
                    } />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Base;
