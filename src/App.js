import "./App.css"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import MyJobs from "./components/MyJobs"
import MyPayments from "./components/MyPayments"
import MyOfferletter from "./components/MyOfferletter"
import MyCertificate from "./components/MyCertificate"
import NotFound from "./components/NotFound"

const App = ()=>(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/myjobs" element={<MyJobs/>}/> 
    <Route exact path="/myPayments" element={<MyPayments/>}/>  
    <Route exact path="/myOfferletter" element={<MyOfferletter/>}/>  
    <Route exact path="/myCertificate" element={<MyCertificate/>}/>  
    <Route  path="/NotFound"  component={NotFound}/>
  </Routes>
  </BrowserRouter>
)

export default App