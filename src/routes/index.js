import Home from "../pages/Home";
import DetailFilm from "../pages/DetailFilm";

const publicRoutes = [
    {path: "/home", component: Home},
    {path: `/filmDetail/`, component: DetailFilm}
]

export {publicRoutes}