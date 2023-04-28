import style from "../styles/errPage.module.scss";
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion";

const ErrPage = () => {
    const navigate = useNavigate();

    function goToHomePage(){
            navigate("/");
    }
    return ( 
        <div className={style.box}>
            <h1 className={style.title}>Page Not Found</h1>
            <motion.button whileHover={{backgroundColor: "transparent"}} className={style.btn} onClick={goToHomePage}>go back</motion.button>
        </div>
     );
}
 
export default ErrPage;