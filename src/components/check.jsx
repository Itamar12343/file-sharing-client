import { CheckLg } from "react-bootstrap-icons";
import style from "../styles/check.module.scss";
import { useEffect, useRef } from "react";

const Check = () => {
    const checkBoxRef = useRef(null);
    const spinerRef = useRef(null);
    const checkBlockRef = useRef(null);

    useEffect(()=>{
        setTimeout(() => {
            checkBoxRef.current.style.transform = "translate(-50%, -50%) scale(1)";
            setTimeout(() => {
                spinerRef.current.style.animationPlayState = "running";
                setTimeout(() => {
                    checkBlockRef.current.style.animationPlayState = "running";
                    setTimeout(() => {
                        checkBoxRef.current.style.transform = "translate(-50%, -50%) scale(0)";
                    }, 1000);
                }, 1000);
            }, 100);
        }, 1000);
    },[]);

    return ( 
        <div className={style["check-box"]} ref={checkBoxRef}>
           <div className={style.spiner} ref={spinerRef}>
              <CheckLg className={style["check"]}/>
              <div className={style["check-block"]} ref={checkBlockRef}></div>
             </div>
         </div>
     );
}
 
export default Check;