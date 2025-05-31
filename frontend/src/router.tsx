import { BrowserRouter, Routes,Route} from "react-router-dom";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/auth/login' element={<LoginView/>} />
                    <Route path='/auth/register' element={<RegisterView/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
