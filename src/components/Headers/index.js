import {Component} from "react"
import {NavLink} from "react-router-dom"
import "./index.css"

class Headers extends Component{
    state = {
        activeTab : "false"
    }
    OnClickBtn = ()=>{
        this.state(prevState=>({activeTab:!prevState}))
    }

    render(){
        const {activeTab} = this.state
        console.log(activeTab)
        return(
            <nav className="Headers_container">
                <img src='./images/digiLogo.png' alt="AppLogo"
                className="AppLogo"/>
                <ul className="Header_tabs_container">
                    <NavLink to="/" className="NavLink"><li  className="head_tab">Home</li></NavLink>
                    <NavLink to="/myjobs" className="NavLink"><li className="head_tab">My Jobs</li></NavLink>
                    <NavLink to="/myPayments" className="NavLink"><li className="head_tab">My Payments</li></NavLink>
                    <NavLink to="/myOfferletter" className="NavLink"><li className="head_tab">My Offerletter</li></NavLink>
                    <NavLink to="/myCertificate" className="NavLink"><li className="head_tab">My Certificate</li></NavLink>
                  
                </ul>
                <div className="profile_card">
                <img src='./images/DigiDp.jpg' alt="DigiDp" className="DigiDp"/>
                </div>
            </nav>
        )
    }
}
export default Headers