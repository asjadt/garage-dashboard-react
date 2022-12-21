import React, { useState, useEffect } from 'react'
import {Input, Col, Container} from 'reactstrap'
import {useSelector} from 'react-redux'
import {Settings} from 'react-feather'
import {useHistory} from 'react-router-dom'
import { ContactsStatus } from "../constant";
import axios from 'axios'
const RightSidebar = () => {


    const history = useHistory();
    const [chatdata,setChatdata] = useState([]) 
    const rightSidebarToggle = useSelector(state => state.Common.rightSidebarToggle)
    
    var images = require.context('../assets/images', true);

    useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/chatMember.json`).then(res => setChatdata(res.data))
    },[])
     
    const dynamicImage = (image) => {
      return images(`./${image}`);
    }

    const RedirectTochat = () => {
    history.push(`${process.env.PUBLIC_URL}/Chat-app/chat`)
    
    }

    return (
          <div className={`right-sidebar ${rightSidebarToggle?'show':''}`} id="right_side_bar">
          <div>
          <Container className="themed-container p-0">
              <div className="modal-header p-l-20 p-r-20">
              <Col sm="8" className="p-0">
                  <h6 className="modal-title font-weight-bold">{ContactsStatus}</h6>
                </Col>
              <Col sm="4" className="text-right p-0">
                  <Settings className="mr-2"/>
              </Col>
              </div>
          </Container>
          <div className="friend-list-search mt-0">
            <Input placeholder="search friend"/><i className="fa fa-search"></i>
          </div>
          <div className="p-l-30 p-r-30">
            <div className="chat-box">
              <div className="people-list friend-list custom-scrollbar">
                <ul className="list">
                {chatdata.map((member,i) => {
                  return(
                    <li className="clearfix" key={i} onClick={RedirectTochat}>
                      <img className="rounded-small user-image" src={dynamicImage(member.thumb)} alt=""/>
                      <div className="status-circle online"></div>
                      <div className="about">
                        <div className="name">{member.name}</div>
                        <div className="status">{member.status}</div>
                      </div>
                    </li>
                  )
                })
                }
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
    )
}

export default RightSidebar