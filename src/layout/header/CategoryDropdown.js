import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Category,Admin,Shopify,Ecommerce,Prestashop } from "../../constant";

const CategoryDropdown = () =>  {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
             {Category}
             <span className="mx-2 badge badge-pill badge-primary">2</span>
         </DropdownToggle>
         <DropdownMenu>
             <DropdownItem>{Admin}</DropdownItem>
             <DropdownItem>{Shopify}</DropdownItem>
             <DropdownItem>{Ecommerce}</DropdownItem>
             <DropdownItem>{Prestashop}</DropdownItem>
         </DropdownMenu>
     </Dropdown>
    )
}

export default CategoryDropdown