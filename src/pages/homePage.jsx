import style from "../styles/homePage.module.scss";
import UploadBox from "../components/uploadBox";
import Receive from "../components/receive";

const HomePage = () => {

    return ( 
      <>
        <div className={style.box}>
          <button className={style["share btn"]}>Share file</button>
          <button className={style["receive btn"]}>Receive file</button>
        </div>
        </>
     );
}
 
export default HomePage;