import style from "../styles/homePage.module.scss";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {

  const [shareAnimation, setShareAnimation] = useState(false);
  const [receiveAnimation, setReceiveAnimation] = useState(false);

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
          <motion.button onClick={()=>{clicked("share")}} className={`${shareAnimation ? style["share-active"] : style.share} ${style.btn}`}><p className={style.p}>Share file</p></motion.button>
          <motion.button onClick={()=>{clicked("receive")}} className={`${receiveAnimation ? style["receive-active"] : style.receive} ${style.btn}`}><p className={style.p}>Receive file</p></motion.button>
        </motion.div>
        <div className={style["nameBtn-box"]}>
          <button className={style["change-name"]}>change name</button>
          <button className={style["remove-name"]}>remove name</button>
        </div>
        </>
     );
}
 
export default HomePage;