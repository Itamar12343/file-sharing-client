import style from "../styles/receive.module.scss";
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./login";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

const Receive = () => {
   
   const navigate = useNavigate();
   const location = useLocation();
   const [askLogin, setAskLogin] = useState(false);
   const [isConnected, setIsConnected] = useState(false);


   useEffect(()=>{
      /*if(location.state == null){
          navigate("/");
      }else{
          window.history.replaceState({}, document.title);       
          }*/

      if(localStorage.getItem("username") == null){
          setTimeout(() => {
             setAskLogin(true);
         }, 300);
      }

      connectToSocket();
  },[]);


  function connectToSocket(){
    if(localStorage.getItem("username")){
    socket.emit("receiverConnect", localStorage.getItem("username"));
    }
  }


    return ( 
        <>
         <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={style.box}>
            <h1 className={style.title}>Receive Files</h1>
            <div className={style["display-box"]}>
               <div className={style.card}><h1>waiting for files</h1></div>
            </div>
        </motion.div>

        {askLogin && <Login/>}
        </>
     );
}
 
export default Receive;