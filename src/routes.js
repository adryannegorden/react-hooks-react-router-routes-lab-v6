import Home from "./pages/Home"
import Directors from "./pages/Directors"
import Actors from "./pages/Actors"
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Directors",
        element: <Directors />
      },
      {
        path: "/Actors",
        element: <Actors />
      },
      {
        path: "/Movie/:id",
        element: <Movie />
      }
    ]
  }
  ]);

export default routes;