import "./style.scss"

function Button() {
    return ( 
    <div>
        <ul className="nav_list">
            <li onClick={() => {console.log("Bo")}}>Phim Bộ</li>
            <li onClick={() => {console.log("Le")}}>Phim Lẻ</li>
        </ul>
    </div>
    );
}

export default Button;