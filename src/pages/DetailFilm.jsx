import {useEffect, useState, useContext} from "react"
import {ResultContext} from "../App"
import axios from "axios"
import { Link } from "react-router-dom"
import "./film.scss"


function Detail() {
    const [filmDetail, setFilmDetail] = useState({})
    const [episode, setEpisode] = useState([])
    const linkDetail = useContext(ResultContext)
    // ----------
    const [click, setClick] = useState(false)
    const [news, setNews] = useState('')
    const [name, setName] = useState('')
    const [tags, setTags] = useState([])

    useEffect(() => {
        axios.get(`https://ophim1.com/phim/${linkDetail.resultDetail}`)
        .then((response) => {
            console.log(response.data);
            setFilmDetail(response.data.movie)
            setEpisode(response.data.episodes)
            setTags(response.data.movie.category)
        })
    },[])

    // function tags(params) {
    //     tags.map(() => {

    //     })
    // }


    // loc ra de lay 1 mang moi chi co index dau tien
    const newEpisode = episode.filter((e,index) => index == 0)
    

    return ( 
    <div className="content-film">
            <div className="film-poster" style={{backgroundImage: `url("${filmDetail.poster_url}")`}} >
                <div className="poster-layer"></div>
                <div className="poster-card">
                    <img className="poster-img" src={filmDetail.thumb_url} width={260} />
                    <h1 className="poster-name">{filmDetail.name}</h1>
                </div>
            </div>
        <div className="video">
            {newEpisode.map((res, index) => (
                <div key={index} className="server">
                    <div className="video-content">
                        {!click && <iframe src={res.server_data[0].link_embed} width={1000} height={500}>
                        </iframe> }
                        {click && <iframe src={news} width={1000} height={500}>
                        </iframe> }
                        {/* Hide and Show NameFilm */}
                        {!click && <h1 className="name-film">{res.server_data[0].filename}</h1> }
                        {click && <h1 className="name-film">{name}</h1> }
                        <p>
                            
                        </p>
                    </div>
                    <div className="episodes">
                        {res.server_data.map((res, index) => (
                            <p 
                                className={"episode" }
                                key={index} 
                                onClick={(e) => {
                                    setNews(res.link_embed)
                                    setName(res.filename)
                                    setClick(true)
                                    e.target.classList.toggle("active-ep")
                                }}
                            >
                                {res.filename}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div> );
}

export default Detail;