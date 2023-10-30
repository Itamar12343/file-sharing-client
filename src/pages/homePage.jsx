import style from "../styles/homePage.module.scss";
import UploadBox from "../components/uploadBox";
import Receive from "../components/receive";
import { useState } from "react";
import {motion} from "framer-motion";

const HomePage = () => {

  const [shareAnimation, setShareAnimation] = useState(false);
  const [receiveAnimation, setReceiveAnimation] = useState(false);

  const [mode, setMode] = useState("normal");


  function clicked(btn){
    if(btn == "share"){
     shareA();
     setMode("share");
    }

    if(btn == "receive"){
      receiveA();
      setMode("receive");
    }
  }

  function shareA(){
    setShareAnimation(true);
    setTimeout(() => {
      setShareAnimation(false);
    }, 500);
  }

  function receiveA(){
    setReceiveAnimation(true);
      setTimeout(() => {
        setReceiveAnimation(false);
      }, 500);
  }

    return ( 
      <>
        <div className={style.box}>
          {mode == "normal" && <button onClick={()=>{clicked("share")}} className={`${shareAnimation ? style["share-active"] : style.share} ${style.btn}`}><p className={style.p}>Share file</p></button>}
          {mode == "normal" && <button onClick={()=>{clicked("receive")}} className={`${receiveAnimation ? style["receive-active"] : style.receive} ${style.btn}`}><p className={style.p}>Receive file</p></button>}
        </div>

        {mode == "share" && <UploadBox/>}
        {mode == "receive" && <Receive/>}

        </>
     );
}
 
export default HomePage;