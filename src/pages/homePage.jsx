import style from "../styles/homePage.module.scss";
import { useState } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import Login from "../components/login";

const HomePage = () => {

  const [shareAnimation, setShareAnimation] = useState(false);
  const [receiveAnimation, setReceiveAnimation] = useState(false);
  const [askLogin, setAskLogin] = useState(false);
  const username = localStorage.getItem("username");

  const [mode, setMode] = useState("normal");
  const navigate = useNavigate();



  function clicked(btn){

    if(btn == "share"){
     if(username == null){
      openLogin();
    }else{
      navigateTo("upload");     
    }
    shareA();
    }

    if(btn == "receive"){
      if(username == null){
        openLogin();
      }else{
        navigateTo("receive");
    }
    receiveA();
    }

  }

  function openLogin(){
    setTimeout(() => {
      setAskLogin(true);
    }, 1000);
  }

  function navigateTo(to){
    if(to == "receive"){
      setTimeout(() => {
        navigate("receive-files", {state: {access:true}});
        setMode("receive");
      }, 1000);
    }
    if(to == "upload"){
      setTimeout(() => {
        navigate("upload-files", {state: {access: true}});
        setMode("share");
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
          <motion.button onClick={()=>{clicked("share")}} className={`${shareAnimation ? style["share-active"] : style.share} ${style.btn}`}><p className={style.p}>Share file</p></motion.button>
          <motion.button onClick={()=>{clicked("receive")}} className={`${receiveAnimation ? style["receive-active"] : style.receive} ${style.btn}`}><p className={style.p}>Receive file</p></motion.button>
        </motion.div>

        {askLogin && <Login/>}
        </>
     );
}
 
export default HomePage;