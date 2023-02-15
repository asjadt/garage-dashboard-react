import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { FileText, LogOut, MessageSquare, Settings, Users } from 'react-feather';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import man from '../../assets/images/dashboard/user.png';
import { Admin, Inbox, LogOuts, Profile, Setting, Taskboard } from "../../constant";
import { firebase_app } from '../../data/config';

const UserActivity = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [profile, setProfile] = useState('');
  const [name, setName] = useState('')
  const [role, setRole] = useState('');


  // auth0 profile
  const { logout } = useAuth0()
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))


  useEffect(() => {
    setProfile(localStorage.getItem('profileURL' || man));
    setName(localStorage.getItem('Name'))
    setRole(JSON.parse(localStorage.getItem('user')).roles[0]?.name)
  }, []);

  const Logout_From_Firebase = () => {
    localStorage.removeItem('profileURL')
    localStorage.removeItem('token');
    firebase_app.auth().signOut()
    props.history.push(`${process.env.PUBLIC_URL}/login`)
  }

  const Logout_From_Auth0 = () => {
    localStorage.removeItem("auth0_profile")
    localStorage.setItem("authenticated", false)
    props.history.push(`${process.env.PUBLIC_URL}/login`)
    logout()
  }


  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle>
        <span
          className="media user-header">
          <img
            className="mr-2 rounded-circle img-35"
            src={authenticated ? auth0_profile.picture : profile}
            style={{ width: "35px", height: "35px" }}
            alt="" />
          <span className="media-body">
            <span className="f-12 f-w-600">{authenticated ? auth0_profile.name : name}</span>
            <span className="d-block">{Admin}</span>
          </span>
        </span>
      </DropdownToggle>
      <DropdownMenu className="p-0">
        <ul className="profile-dropdown">
          <li className="gradient-primary-1">
            <h6 className="mb-0">{name}</h6><span>{role}</span>
          </li>
          <li><Link to={'/'}><Users />{Profile}</Link></li>
          <li><Link to={'/'}><MessageSquare />{Inbox}</Link></li>
          <li><Link to={'/'}><FileText />{Taskboard}</Link></li>
          <li><Link to={'/'}><Settings />{Setting}</Link></li>
          <li><Link to={'/login'} onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase}><LogOut />{LogOuts}</Link></li>
        </ul>
      </DropdownMenu>
    </Dropdown>
  )
}

export default withRouter(UserActivity)