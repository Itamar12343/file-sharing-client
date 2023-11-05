import style from "../styles/peopleBox.module.scss";
import {motion} from "framer-motion";

const PeopleBox = () => {
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