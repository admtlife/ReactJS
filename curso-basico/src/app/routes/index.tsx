import { Route, Routes, BrowserRouter,  Navigate} from "react-router-dom";
import { Dashboard } from "../pages";


export const MyRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Routes>
        </BrowserRouter>
    );
};