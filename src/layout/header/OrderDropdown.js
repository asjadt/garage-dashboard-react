import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Order, CreditCard,PayPal,Visa,Paytm } from '../../constant';

const OrderDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
            {Order}
            <span className="mx-2 badge badge-pill badge-primary">1</span>
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem>{PayPal}</DropdownItem>
        <DropdownItem>{CreditCard}</DropdownItem>
        <DropdownItem>{Visa}</DropdownItem>
        <DropdownItem>{Paytm}</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    )
}

export default OrderDropdown