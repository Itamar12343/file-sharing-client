import { useRef, useState } from "react";
import style from "../styles/uploadBox.module.scss";
import {CardImage} from "react-bootstrap-icons";
import {motion} from "framer-motion";

const UploadBox = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const inputRef = useRef(null);

    function btnClick(){
        btnClickAnimation();
        openFileExplorer();
    }

    function iconClick(){
        iconClickAnimation();
        openFileExplorer();
    }

    function btnClickAnimation(){
        setIsBtnClicked(true);
        setTimeout(() => {
            setIsBtnClicked(false);
        }, 300);
    }

    function iconClickAnimation(){
        setIsIconClicked(true);
        setTimeout(() => {
            setIsIconClicked(false);
        }, 300);
    }

    function openFileExplorer(){
        inputRef.current.click();
    }

    return ( 
        <div className={style.box}>
            <CardImage className={ isIconClicked ? style["icon-active"] : style.icon} onClick={iconClick}/>
            <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClick}>upload a file</button>
            <input type="file" ref={inputRef}/>
        </div>
     );
}
 
export default UploadBox;