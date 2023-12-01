import { useEffect, useRef, useState } from "react";
import style from "../styles/uploadBox.module.scss";
import {CardImage} from "react-bootstrap-icons";
import Check from "../components/check";
//import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import { useLocation } from "react-router-dom";
import Login from "./login";

const UploadBox = () => {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const [isCheckAnimation, setIsCheckAnimation] = useState(false);
    const [file, setFile] = useState();
    const inputRef = useRef(null);
    //const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [askLogin, setAskLogin] = useState(false);
    let fileToSend = false;


    useEffect(()=>{
        if(location.state == null){
            navigate("/");
        }else{
            window.history.replaceState({}, document.title);       
        }

        if(localStorage.getItem("username") == null){
            setTimeout(() => {
                setAskLogin(true);
            }, 300);
        }
    });
   


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
        const fileType = input.files[0].name.split(".").pop();

        if(fileType == "png" || fileType == "jpeg" || fileType == "jpg"){

        const reader = new FileReader();
        reader.readAsDataURL(input.files[0]);
        reader.onload = ()=>{
            
            setFile({
                file: reader.result,
                name: input.files[0].name,
                type: input.files[0].name.split(".").pop()
            });

        }
    }
            
            fileToSend = {
                file: input.files[0],
                name: input.files[0].name,
                type: input.files[0].name.split(".").pop()
            }
        
            //qsetFileReducer(fileForRedux);
            
            setTimeout(() => {
                startCheckAnimation();
                goToPeopleRout();
            }, 1000);
    }

    function startCheckAnimation(){
        setIsCheckAnimation(true);
    }

    /*function setFileReducer(file){
        dispatch({type: "setFile", file})
    }*/

    function goToPeopleRout(){
        setTimeout(() => {
            navigate("/send-to", {state: {fileToSend}});
        }, 4000);
    }

    return ( 
         <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className={isCheckAnimation ? style["hide-box"] : style.box}>
               {!file && <CardImage className={ isIconClicked ? style["icon-active"] : style.icon} onClick={iconClick}/>}
               {file && <div className={style.display}>
               <div className={style["display-img"]} style={{backgroundImage: `url(${file.file})`}}></div>
               <p className={style.text}>This file cannot be viewed</p>
               </div>}
               <button className={isBtnClicked ? style["btn-active"] : style.btn} onClick={btnClick}>Upload a file
               </button>
               <input className={style.input} type="file" ref={inputRef} onChange={getFile}/>
           </motion.div>
        {isCheckAnimation && <Check/>}

        {askLogin && <Login/>}
        </>
     );
}
 
export default UploadBox;