import style from "../styles/uploadBox.module.scss";
import {CardImg} from "react-bootstrap";

const UploadBox = () => {
    return ( 
        <div className={style.box}>
            <CardImg className={style.h}/>
        </div>
     );
}
 
export default UploadBox;