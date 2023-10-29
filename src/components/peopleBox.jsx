import style from "../styles/peopleBox.module.scss";

const PeopleBox = () => {
    return ( 
        <div className={style.box}>
            <h1 className={style.title}>Connected users</h1>
            <div className={style["card-box"]}>
               <div className={style.card}>no connected users</div>
            </div>
        </div>
     );
}
 
export default PeopleBox;