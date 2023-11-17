import style from "../styles/homePage.module.scss";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "../components/login";

const HomePage = () => {

  const [shareAnimation, setShareAnimation] = useState(false);
  const [receiveAnimation, setReceiveAnimation] = useState(false);

  const [changeNameAnimation, setChangeNameAnimation] = useState(false);
  const [removeNameAnimation, setRemoveNameAnimation] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("username"));
  const [askLogin, setAskLogin] = useState(false);
  const navigate = useNavigate();



  function clicked(btn){

    if(btn == "share"){
      navigateTo("upload");     
      shareA();
    }

    if(btn == "receive"){
        navigateTo("receive");
       receiveA();
    }

    if(btn == "changeName"){
      changeNameA();
      setTimeout(() => {
        setAskLogin(true);
      }, 1000);
    }

    if(btn == "removeName"){
      removeNameA();
      setTimeout(() => {
        localStorage.removeItem("username");
        setUserName(false);
      }, 1000);
    }

  }

  function changeNameA(){
    setChangeNameAnimation(true);
    setTimeout(() => {
      setChangeNameAnimation(false);
    }, 300);
  }

  function removeNameA(){
    setRemoveNameAnimation(true);
    setTimeout(() => {
      setRemoveNameAnimation(false);
    }, 300);
  }

  function navigateTo(to){
    if(to == "receive"){
      setTimeout(() => {
        navigate("receive-files", {state: {access:true}});
      }, 1000);
    }
    if(to == "upload"){
      setTimeout(() => {
        navigate("upload-files", {state: {access: true}});
      }, 1000);
    }
  }

  function shareA(){
    setShareAnimation(true);
    setTimeout(() => {
      setShareAnimation(false);
    }, 300);
  }

  function receiveA(){
    setReceiveAnimation(true);
      setTimeout(() => {
        setReceiveAnimation(false);
      }, 300);
  }

    return ( 
      <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={style.box}>
          <motion.button onClick={()=>{clicked("share")}} className={`${shareAnimation ? style["share-active"] : style.share} ${style.btn}`}><p className={style.p}>Send File</p></motion.button>
          <motion.button onClick={()=>{clicked("receive")}} className={`${receiveAnimation ? style["receive-active"] : style.receive} ${style.btn}`}><p className={style.p}>Receive File</p></motion.button>
        </motion.div>
        {<motion.div initial={{opacity: 0}} animate={{opacity: userName ? 1 : 0, visibility: userName ? "visible" : "hidden"}} className={style["nameBtn-box"]}>
          <motion.button style={{transform: changeNameAnimation ? window.innerWidth > 342 ? "scale(0.5)" : "scale(0.5) translate(-50%)" : window.innerWidth > 342 ? "scale(1)" : "scale(1) translate(-50%)", backgroundColor: changeNameAnimation ? "rgb(255,255,255,0.4)" : "transparent"}} onClick={()=> clicked("changeName")} className={style["change-name"]}>change name</motion.button>
          <motion.button style={{transform: removeNameAnimation ? window.innerWidth > 342 ? "scale(0.5)" : "scale(0.5) translate(-50%)" : window.innerWidth > 342 ? "scale(1)" : "scale(1) translate(-50%)", backgroundColor: removeNameAnimation ? "rgb(255,255,255,0.4)" : "transparent"}} onClick={()=> clicked("removeName")} className={style["remove-name"]}>remove name</motion.button>
        </motion.div>}

        {askLogin &&<Login/>}
        </>
     );
}
 
export default HomePage;