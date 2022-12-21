import React,{useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Status,OngoingProjects } from "../../constant";
const StatusDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
 return(
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
             {Status}
             <span className="mx-2 badge badge-pill badge-primary">{"7"}</span>
     </DropdownToggle>
     <DropdownMenu className="p-0">
     <ul className="status-dropdown">
       <li>
         <h6 className="mb-0">{OngoingProjects}</h6>
       </li>
       <li>
         <p className="mb-0">{"HTML5 Validation Report"}</p>
         <div className="progress sm-progress-bar">
           <div className="progress-bar bg-primary" role="progressbar" style={{'width': '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
       </li>
       <li>
         <p className="mb-0">{"Bootstrap Admin Templates"}</p>
         <div className="progress sm-progress-bar">
           <div className="progress-bar bg-secondary" role="progressbar" style={{'width': '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
       </li>
       <li>
         <p className="mb-0">{"Goggle Crome Extension"}</p>
         <div className="progress sm-progress-bar">
           <div className="progress-bar bg-success" role="progressbar" style={{'width': '45%'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
       </li>
       <li>
         <p className="mb-0">{"Clients Projects"}</p>
         <div className="progress sm-progress-bar">
           <div className="progress-bar bg-info" role="progressbar" style={{'width': '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
       </li>
     </ul>
     </DropdownMenu>
 </Dropdown>
 )

}

export default StatusDropdown