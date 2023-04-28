import style from "../styles/uploadBox.module.scss";
import {CardImage} from "react-bootstrap-icons";

const UploadBox = () => {
    return ( 
        <div className={style.box}>
            <CardImage className={style.icon}/>
            <button className={style.btn}>upload a file</button>
        </div>
     );
}
 
export default UploadBox;