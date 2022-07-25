import Home from "../pages/Home";
import DetailFilm from "../pages/DetailFilm";

const publicRoutes = [
    {path: "/", component: Home},
    {path: `/film/`, component: DetailFilm}
]

export {publicRoutes}