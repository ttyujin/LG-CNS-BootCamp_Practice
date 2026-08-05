import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./pages/event/EventPage";
import SuccessPage from "./pages/event/SuccessPage";
import ErrorPage from "./pages/event/ErrorPage";


const TestRouterApp = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"         element={<EventPage/>} />
                <Route path="/success"  element={<SuccessPage/>} />
                <Route path="/error"    element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default TestRouterApp;