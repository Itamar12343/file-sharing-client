import {Route,Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrPage from "./pages/ErrPage";
import PeopleBox from "./components/peopleBox";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrPage/>}/>
          <Route path="send-to" element={<PeopleBox/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
