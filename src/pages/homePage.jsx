import { useState } from "react";
import PeopleBox from "../components/peopleBox";
import UploadBox from "../components/uploadBox";

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = ()=>{
    setWidth(window.innerWidth);
  }

    return ( 
        <>
          <UploadBox/>
          {width > 757 && <PeopleBox/>}
        </>
     );
}
 
export default HomePage;