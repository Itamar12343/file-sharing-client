import style from "../styles/peopleBox.module.scss";
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

const PeopleBox = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const userName = localStorage.getItem("username");
    let file = false;

   useEffect(()=>{
      if(location.state == null){
          //navigate("/");
      }else{
        file = location.state.fileToSend.file;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            console.log(reader.result);
        }

          window.history.replaceState({}, document.title);
        }

        sendNameToSocket();

        window.addEventListener("beforeunload", handleBeforLoad, {capture:true});

        function handleBeforLoad(event){
          event.preventDefault();
          return (event.returnValue = '');
        }

  },[]);



  function sendNameToSocket(){
    socket.emit("add-name-to-list", userName);
  }

  function removeNameFromSocket(){
    socket.emit("remove-name-from-list", userName);
  }


    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={style.box}>
            <h1 className={style.title}>Connected users</h1>
            <div className={style["card-box"]}>
               <div className={style.card}>no connected users</div>
            </div>
        </motion.div>
     );
}
 
export default PeopleBox;