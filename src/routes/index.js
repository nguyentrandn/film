import Home from "../pages/Home";
import DetailFilm from "../pages/DetailFilm";

const publicRoutes = [
    {path: "/film/home", component: Home},
    {path: `/film/filmDetail/`, component: DetailFilm}
]

export {publicRoutes}