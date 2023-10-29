import style from "../styles/homePage.module.scss";
import UploadBox from "../components/uploadBox";
import Receive from "../components/receive";

const HomePage = () => {

    return ( 
      <>
        <div className={style.box}>
          <button className={`${style.share} ${style.btn}`}><p className={style.p}>Share file</p></button>
          <button className={`${style.receive} ${style.btn}`}><p className={style.p}>Receive file</p></button>
        </div>
        </>
     );
}
 
export default HomePage;