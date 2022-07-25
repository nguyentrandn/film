import {useEffect, useState, useRef} from "react"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
    const [search, setSearch] = useState()
    const [click, setClick] = useState(0)
    const [result, setResult] = useState({})
    const ref = useRef()
    
    // useEffect(() => {
    //     axios.get(`https://ophim1.com/phim/${search}`)
    //     .then((response) => {
    //         console.log(typeof(response.data.movie));
    //         // 
            
    //         setResult(response.data)
    //     })
    // },[click])

    const handleChange = (e) => {
        const text = e.target.value
        const textConver = text.replaceAll(' ', '-')
        
        setSearch(textConver)
    }
    const handleClick = () => {
        ref.current.classList.add("active");
        document.getElementById("full").classList.add("active")
    }

    return ( 
    <div className="search_result">
        <div className="box_search">
            <input 
                className="search_input"
                onChange={handleChange}
                onClick={handleClick}
            />
            <button className="btn_search" onClick={() => setClick(click + 1)}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </div>
        <div className="search_showResult" id="div" ref={ref}>
            <ul>
                {/* {result.status === 200 ? result.movie.name : "Loi "} */}
                
            </ul>
        </div>
    </div> 
    );
}

export default Search;