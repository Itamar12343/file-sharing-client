import style from "../styles/homePage.module.scss";
import { useState } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const [shareAnimation, setShareAnimation] = useState(false);
  const [receiveAnimation, setReceiveAnimation] = useState(false);

  const [mode, setMode] = useState("normal");
  const navigate = useNavigate();



  function clicked(btn){
    if(btn == "share"){
     shareA();

     setTimeout(() => {
       navigate("upload-files");
       setMode("share");
     }, 1000);

    }

    if(btn == "receive"){
      receiveA();

      setTimeout(() => {
        navigate("receive-files");
        setMode("receive");
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
          <motion.button animate = {{opacity: mode == "normal"? 1 : 0, display: mode == "normal" ? "inline" : "none"}} initial = {{opacity:1}} transition={{duration: 2}} onClick={()=>{clicked("share")}} className={`${shareAnimation ? style["share-active"] : style.share} ${style.btn}`}><p className={style.p}>Share file</p></motion.button>
          <motion.button animate = {{opacity: mode == "normal"? 1 : 0, display: mode == "normal" ? "inline" : "none"}} initial = {{opacity:1}} transition={{duration: 2}} onClick={()=>{clicked("receive")}} className={`${receiveAnimation ? style["receive-active"] : style.receive} ${style.btn}`}><p className={style.p}>Receive file</p></motion.button>
        </motion.div>
        </>
     );
}
 
export default HomePage;