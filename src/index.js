import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/NavBar"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    function App() {
        return (
            <header>
                <NavBar />
            </header>
        )
    }
);