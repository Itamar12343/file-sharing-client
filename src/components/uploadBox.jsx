import { useRef, useState } from "react";
import style from "../styles/uploadBox.module.scss";
import {CardImage} from "react-bootstrap-icons";
import Check from "../components/check";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const UploadBox = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [isCheckAnimation, setIsCheckAnimation] = useState(false);
    const [file, setFile] = useState();
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function btnClick(){
        btnClickAnimation();
        openFileExplorer();
    }

    function iconClick(){
        iconClickAnimation();
        openFileExplorer();
    }

    function btnClickAnimation(){
        setIsBtnClicked(true);
        setTimeout(() => {
            setIsBtnClicked(false);
        }, 300);
    }

    function iconClickAnimation(){
        setIsIconClicked(true);
        setTimeout(() => {
            setIsIconClicked(false);
        }, 300);
    }

    function openFileExplorer(){
        inputRef.current.click();
    }

    function getFile(e){
        const input = e.target;

        if(input.files[0].name.split(".").pop() == "png" || input.files[0].name.split(".").pop() == "jpeg" || input.files[0].name.split(".").pop() == "jpg"){

        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = ()=>{
            
            setFile({
                file: reader.result,
                name: input.files[0].name,
                type: input.files[0].name.split(".").pop()
            });
        }
    }else{
        setFile({
            file: input.files[0],
            name: input.files[0].name,
            type: input.files[0].name.split(".").pop()
        });
    }

            const fileForRedux = {
                file: input.files[0],
                name: input.files[0].name,
                type: input.files[0].name.split(".").pop()
            }
            setFileReducer(fileForRedux);
            
            setTimeout(() => {
                startCheckAnimation();
                goToPeopleRout();
            }, 1000);
    }

    function startCheckAnimation(){
        setIsCheckAnimation(true);
    }

    function setFileReducer(file){
        dispatch({type: "setFile", file})
    }

    function goToPeopleRout(){
        setTimeout(() => {
            navigate("/send-to");
        }, 4000);
    }


    return ( 
         <>
        <div className={isCheckAnimation ? style["hide-box"] : style.box}>
               {!file && <CardImage className={ isIconClicked ? style["icon-active"] : style.icon} onClick={iconClick}/>}
               {file && <div className={style.display}>
               <div className={style["display-img"]} style={{backgroundImage: `url(${file.file})`}}></div>
               <p className={style.text}>This file cannot be viewed</p>
               </div>}
               <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClick}>Upload a file</button>
               <input className={style.input} type="file" ref={inputRef} onChange={getFile}/>
           </div>
        {isCheckAnimation && <Check/>}
        </>
     );
}
 
export default UploadBox;