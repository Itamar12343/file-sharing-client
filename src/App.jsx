import {Route,Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<div>none</div>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
