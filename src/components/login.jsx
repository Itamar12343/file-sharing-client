import { useState } from "react";
import style from "../styles/login.module.scss";
import {motion} from "framer-motion";

const Login = () => {

    const [btnAnimation, setBtnAnimation] = useState(false);
    const [name, setName] = useState();
    const [closeLogin, setCloseLogin] = useState(false);


    function btnClicked(){
       startBtnAnimation();
       dealWithUserName();
    }

    function dealWithUserName(){
        if(name != "" && name != undefined && name != " "){
            localStorage.setItem("username", name);
            console.log(name);
            setCloseLogin(true);
        }
    }

    function startBtnAnimation(){
        setBtnAnimation(true);
        setTimeout(() => {
            setBtnAnimation(false);
        }, 300);
    }

    return ( 
        <>
        <motion.div initial={{transform: "scale(0) translate(-50%,-50%)"}} animate={{transform: !closeLogin ? "scale(1) translate(-50%,-50%)" : "scale(0) translate(-50%,-50%)"}} className={style.box}>
            <h1 className={style.title}>Enter your name</h1>
            <motion.input onChange={()=> setName(event.target.value)} whileFocus={{border: "4px solid rgb(75, 159, 255)"}} className={style.input} type="text" placeholder="name"/>
            <br/>
            <button className={btnAnimation ? style["btn-active"] : style.btn} onClick={btnClicked}>ok</button>
            <div className={style.block}></div>
            </motion.div>
        </>
     );
}
 
export default Login;