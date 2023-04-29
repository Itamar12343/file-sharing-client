import { useRef, useState } from "react";
import style from "../styles/uploadBox.module.scss";
import {CardImage} from "react-bootstrap-icons";

const UploadBox = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const inputRef = useRef(null);

    function btnClick(){
        btnClickAnimation();
    }

    function btnClickAnimation(){
        setIsBtnClicked(true);
        setTimeout(() => {
            setIsBtnClicked(false);
        }, 300);
    }

    return ( 
        <div className={style.box}>
            <CardImage className={style.icon}/>
            <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClick}>upload a file</button>
            <input type="file" ref={inputRef}/>
        </div>
     );
}
 
export default UploadBox;