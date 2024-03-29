import style from "../styles/receive.module.scss";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import Login from "./login";
import io from "socket.io-client";

const Receive = () => {
  
  const socket = io.connect("http://localhost:3000");
   const [askLogin, setAskLogin] = useState(false);
   const [loginErr, setLoginErr] = useState(false);
   let isConnected = false;


   useEffect(()=>{

      checkIfLogin();

      makeSureConnected();
      socketListeners();



  },[]);



  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [location.pathname]);


  function socketListeners(){
    socket.on("nameError",()=>{
      setLoginErr(true);
      isConnected = false;
    });
  }

  function makeSureConnected(){
    setInterval(() => {
        if(isConnected == false){
            connectToSocket();
            console.log("connecting");
        }
      }, 1000);
  }


  function connectToSocket(){
    if(localStorage.getItem("username")){
    socket.emit("receiverConnect", localStorage.getItem("username"));
    isConnected = true;
    }else{
        isConnected = false;
    }
  }

  function checkIfLogin(){
    if(localStorage.getItem("username") == null){
        setTimeout(() => {
           setAskLogin(true);
       }, 300);
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
        {loginErr && <Login err={true}/>}
        </>
     );
}
 
export default Receive;