import { useState } from "react";
import style from "../styles/errPage.module.scss";
import {useNavigate} from "react-router-dom"

const ErrPage = () => {
    const navigate = useNavigate();
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    function goToHomePage(){
            navigate("/");
    }

    function btnClickAnimation(){
        setIsBtnClicked(true);
        setTimeout(() => {
            setIsBtnClicked(false);
        }, 300);
    }

    function btnClicked(){
        btnClickAnimation();
        setTimeout(() => {
            goToHomePage();
        }, 500);
    }

    return ( 
        <div className={style.box}>
            <h1 className={style.title}>Page Not Found</h1>
            <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClicked}>go back</button>
        </div>
     );
}
 
export default ErrPage;