import "./css/nav.css";
import { Routes,Route,Link } from "react-router-dom";
import Homepage from "./Components/homepage";
import About from "./Components/about";
import Menu from "./Components/menu";
import Order from "./Components/orderonline";
import Lgp from "./Components/login";
import Bookingpage from "./Components/bookingpage";
function Nav(){
    return(
    <nav className="nav">
        <img src="Logo .svg" alt="logo"/>
        <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/menu" >Menu</Link></li>
        <li><Link to="/bookingpage">Reservation</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login" >Login in</Link></li>
        </ul>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/bookingpage" element={<Bookingpage/>}/>
        <Route path="/order-online" element={<Order/>}/>
        <Route path="/login" element={<Lgp/>}/>
        </Routes>
         </nav>
        );
 }
 export default Nav;