import { useContext } from "react";
import {ResultContext} from "../App"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faXmark } from "@fortawesome/free-solid-svg-icons";

function Popup() {
    const Result = useContext(ResultContext)

    const handleSubmit = () => {
      const value = document.getElementById("i").value;
              if (value == "") {
                alert("Khong duoc de trong Email")
              } else {
                Result.setPop(false);
                document.body.style.overflow = "";
                Result.setEmail(document.getElementById("i").value)
              }
    }

    const handleKey =(e) => {
      if (e.charCode == 13) {
        handleSubmit()
      }
    }
  return (
    <div className="popup">
      <div className="popup-layer"></div>
      <div className="popup-content">
        <div className="popup-close">
          <button
            className="btn "
            onClick={() => {
              Result.setPop(false);
              document.body.style.overflow = "";
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="popup-group">
          <div className="popup-title">Nhập Email của bạn</div>
          <div className="popup-input">
            <label htmlFor="i">Email: </label>
            <input type="email" name="input" id="i" onChange={(e) => (e.target.value)} onKeyPress={handleKey} autoFocus/>
          </div>
        </div>
        <div className="popup-btn">
          <button
            className="btn popup-submit"
            onClick={() => {
              handleSubmit()
            }}
          >
            Xác nhận
          </button>
          <button
            className="btn popup-cancer"
            onClick={(e) => {
              Result.setPop(false);
              document.body.style.overflow = "";
            }}
          >
            Cancer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
