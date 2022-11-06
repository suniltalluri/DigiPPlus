import {Component} from "react"
import { GrAnnounce } from 'react-icons/gr';
import Headers from "../Headers"
import "./index.css"

class Home extends Component{
  // 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
    render(){
      return(
         <div className="Home_container">
            <Headers/>
            <div className="Home_data_container">
            <img src="./images/diLogo.jpg" alt="HomeLogo"
            className="HomeLogo"/>
            <h1 className="Home_heading">Welcome To Digipplus</h1>
            <p className="AnnouncementHeading">Announcements <span><GrAnnounce className="GrAnnounce"/></span></p>
            <p className="HomeNote">We are working on adding Project and Internship Details, So just fill up profile only</p>
            <h3 className="Action_heading">Work Action </h3>
            <button className="HomeViewBtn">View Intern Data</button>
            <h3 className="HomeInternshipsHeading">Internships</h3>
            <div className="homeMsgCard">
                <h3 className="solution_head">Solution Writing</h3>
                <p className="solution_para">Write Solution</p>
            </div>
            </div>
         </div>
      )
    }
}
export default Home