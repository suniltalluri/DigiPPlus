import {Component} from "react"
import { GrAnnounce } from 'react-icons/gr';
import Headers from "../Headers"
import "./index.css"

class MyJobs extends Component{
    render(){
        return(
            <div className="JobTabContainer">
                <Headers/>
                <div className="jobCardDataContainer">
                    <div className="JobTaskCard">
                      <div className="jobGuidCard">
                        <h1 className="jobHeading">JOBS</h1>
                        <p className="jobSolWriting_head">Solution Writing</p>
                        <h1 className="jobApplication_head">FOR JOB APPLICATION</h1>
                        <p className="jobScreenTask_head">SCREENING TASKS</p>
                        <h1 className="AppliStatus_head">APPLICATION STATUS</h1>
                        <p className="JobStatus_head"> JOB APPLICATION STATUS</p>

                      </div>
                       <div className="jobSolutionBookCard">
                        <p className="maths_heading">K10 Maths Text Books Solution</p>
                        <p className="mathsNote_heading">intern digipplus</p>
                       </div>
                    </div>
                 <div className="JobAnnouncementCard">
                <p className="JobAnnouncementHeading">Announcements <span><GrAnnounce className="JobGrAnnounce"/></span>
                <span><GrAnnounce className="JobGrAnnounce"/></span>
                </p>
                <p className="jobNote">We are Working on adding Project and Internship Details,so just fill up profile only.</p>
                 </div>
                </div>
            </div>
        )
    }
}
export default MyJobs