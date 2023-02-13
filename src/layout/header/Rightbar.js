import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BellDropdown from './BellDropdown';
import Search from './Search';
import UserActivity from './UserActivity';

const Rightbar = () => {
  const mobileRightTog = useSelector(state => state.Common.mobileRightToggle)
  const rightSidebarToggle = useSelector(state => state.Common.rightSidebarToggle)
  const dispatch = useDispatch();
  return (
    <div className="nav-right col pull-right right-menu">
      <ul className={`nav-menus ${mobileRightTog ? 'open' : ''}`}>
        <li>
          <Search />
        </li>
        <li>
          <BellDropdown />
        </li>

        <li>
          <UserActivity />
        </li>
      </ul>
    </div>
  )
}


export default Rightbar