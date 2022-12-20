import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export const MyRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Olá Rota</h1>} />
            </Routes>
        </BrowserRouter>
    );
};