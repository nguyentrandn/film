import "./style.scss";
import Search from "./Search";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { ResultContext } from "../App";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const Result = useContext(ResultContext);

  return (
    <div className="nav_container">
      <Link to={"/film"} className="logo">
        LOGO
      </Link>
      <div className="nav_menu">
        <Button />
      </div>
      <div className="nav_search">
        <Search />
      </div>

      {Result.getEmail == "" ? (
        <div className="nav_control">
          <button className="control-btn-in" onClick={() => Result.setPop(true)}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        </div>
      ) : (
        <div className="nav_control">
          <div>
            <p>{Result.getEmail}</p>
          </div>
          <button
            className="control-btn-out"
            onClick={() => Result.setEmail("")}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
