import style from "../styles/receive.module.scss";
import {motion} from "framer-motion";

const Receive = () => {
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