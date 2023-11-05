import style from "../styles/receive.module.scss";
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Receive = () => {
   
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(()=>{
      if(location.state == null){
          navigate("/");
      }else{
          window.history.replaceState({}, document.title)        }
  });


    return ( 
        <>
         <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={style.box}>
            <h1 className={style.title}>Receive Files</h1>
            <div className={style["card-box"]}>
               <div className={style.card}>no files</div>
            </div>
        </motion.div>
        </>
     );
}
 
export default Receive;