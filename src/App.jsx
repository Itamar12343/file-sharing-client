import {Route,Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrPage from "./pages/ErrPage";
import PeopleBox from "./components/peopleBox";
import UploadBox from "./components/uploadBox";
import Receive from "./components/receive";
import Login from "./components/login";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrPage/>}/>
          <Route path="send-to" element={<PeopleBox/>}/>
          <Route path="upload-files" element={<UploadBox/>}/>
          <Route path="receive-files" element={<Receive/>}/>
          <Route path="login" element={<Login/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
