import {useEffect, useState, useContext, createContext, useMemo} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import {ResultContext} from "../App"
import "./home.scss"
import Slides from "../layouts/slides"

// ---------
import New from "../layouts/New"
import Popup from "../layouts/Popup";

// ---------Popup

function Home() {
    const [all , setAll] = useState([])
    const [page, setPage] = useState(1)


    const resultFilm = useContext(ResultContext)

    useEffect(() =>{
        axios.get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${page}`)
        .then((response) =>{
            setAll(response.data.items)
        })
    },[page])

    // ---------Scroll---------
    // useMemo(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 500) {
    //             setPop(true)
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             setPop(false)
    //             document.body.style.overflow = '';

    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     // clear function
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // },[])
    
    useMemo(() => {
        setTimeout(() => {
            resultFilm.setPop(true)
            console.log("mount");
            document.body.style.overflow = 'hidden';
        },2000)    
    },[])
    return ( 
    <div>
        <div>
            <Slides/>
        </div>
        
        <div className="box-card">
            {all.map((res, index) => 
                <Link 
                    key={index}
                    className="card-link"
                    to={`/film/`} onClick={() => resultFilm.setResultDetail(res.slug)} 
                >
                    <div className="card" style={{backgroundImage: `url({/*../asset/NguyenCV.png*/})`}}>                    
                        <p>{res.name}</p>
                    </div>
                </Link>
            )}
            <div className="pages">
                <button className="btn" onClick={(e) => {
                    setPage(2) }}>2</button>
                <button className="btn" onClick={(e) => {setPage(3)}}>3</button>
                <button className="btn" onClick={(e) => {setPage(4)}}>4</button>
            </div>
        </div>
        {/* <New/> */}
    </div>
     );
}

export default Home;