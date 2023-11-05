import { useState } from "react";
import style from "../styles/errPage.module.scss";
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion";

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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={style.box}>
            <h1 className={style.title}>Page Not Found</h1>
            <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClicked}>go back</button>
        </motion.div>
     );
}
 
export default ErrPage;