import {Route,Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrPage from "./pages/ErrPage";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrPage/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
