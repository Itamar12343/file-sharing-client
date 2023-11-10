import { useState } from "react";
import style from "../styles/login.module.scss";
import {motion} from "framer-motion";
import {Check} from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [btnAnimation, setBtnAnimation] = useState(false);
    const [checkAnimation, setCheckAnimation] = useState(false);
    const [closeBtnAnimation, setCloseBtnAnimation] = useState(false);
    const [closeCheckAnimation, setCloseCheckAnimation] = useState(false);
    const [name, setName] = useState();
    const [closeLogin, setCloseLogin] = useState(false);
    const navigate = useNavigate();


    function btnClicked(){
       dealWithUserName();
    }

    function dealWithUserName(){
        if(name != "" && name != undefined && name != " "){
            localStorage.setItem("username", name);
            startBtnAnimation();
        }
    }

    function startBtnAnimation(){
        setCheckAnimation(true);
        setBtnAnimation(true);
        setTimeout(() => {
            setBtnAnimation(false);
            setTimeout(() => {
                setCloseLogin(true);
            }, 1000);
        }, 300);
    }

    function startClosBtneAnimation(){
        setCloseCheckAnimation(true);
        setCloseBtnAnimation(true);
        setTimeout(() => {
            setCloseBtnAnimation(false);
            setTimeout(() => {
                setCloseLogin(true);
                setTimeout(() => {
                    navigate("/");
                }, 500);
            }, 300);
        }, 300);
    }

    return ( 
        <>
        <motion.div initial={{transform: "scale(0) translate(-50%,-50%)"}} animate={{transform: !closeLogin ? "scale(1) translate(-50%,-50%)" : "scale(0) translate(-50%,-50%)"}} className={style.container}>
        <div className={style.box}>
            <h1 className={style.title}>Enter your name</h1>
            <motion.input onChange={()=> setName(event.target.value)} whileFocus={{border: "4px solid rgb(75, 159, 255)"}} className={style.input} type="text" placeholder="name"/>
            <motion.button style={{backgroundColor: checkAnimation ? "rgb(54, 160, 253)" : "transparent", borderRadius: checkAnimation ? "50%" : "20%"}} className={btnAnimation ? style["btn-active"] : style.btn} onClick={btnClicked}>{checkAnimation ? <div className={style["icon-container"]}><Check className={style.check}/></div> : "ok"}</motion.button>
        </div>
            <motion.button onClick={startClosBtneAnimation} style={{backgroundColor: closeCheckAnimation ? "rgb(54, 160, 253)" : "transparent"}} className={closeBtnAnimation ? style["close-btn-active"] : style["close-btn"]}>{closeCheckAnimation ? <div className={style["icon-container"]}><Check className={style["close-btn-icon"]}/></div> : <div className={style["icon-container"]}><X className={style["close-btn-icon"]}/></div>}</motion.button>
            <div className={style.block}></div>
            </motion.div>
        </>
     );
}
 
export default Login;