import style from "../styles/errPage.module.scss";

const ErrPage = () => {
    return ( 
        <div className={style.box}>
            <h1 className={style.title}>Page Not Found</h1>
            <button className={style.btn}>go back</button>
        </div>
     );
}
 
export default ErrPage;