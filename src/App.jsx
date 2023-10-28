import {Route,Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrPage from "./pages/ErrPage";
import Check from "./components/check";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrPage/>}/>
          <Route path="h" element={<Check/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
