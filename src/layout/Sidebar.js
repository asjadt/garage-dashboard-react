import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import configDB from '../data/customizer/config';
import { MENUITEMS } from './sidebar/menu';

const Sidebar = () => {

    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const switchToggle = useSelector(state => state.Common.switchToggle)
    const [margin, setMargin] = useState(0);
    const [width, setWidth] = useState(0);
    const [hideLeftArrowRTL, setHideLeftArrowRTL] = useState(true);
    const [hideRightArrowRTL, setHideRightArrowRTL] = useState(true);
    const [hideRightArrow, setHideRightArrow] = useState(true);
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const wrapper = useSelector(content => content.Customizer.sidebar_types.type) || configDB.data.settings.sidebar.type;
    const layout = useSelector(content => content.Customizer.layout)
    const sidebar_background_color = configDB.data.settings.sidebar_background_setting;


    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize();

        const currentUrl = window.location.pathname;
        mainmenu.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl) {
                        setNavActive(subSubItems)
                        return true
                    }
                    else {
                        return false
                    }
                })
                return subItems
            })
            return items
        })

        const timeout = setTimeout(() => {
            const elmnt = document.getElementById("myDIV");
            const menuWidth = elmnt.offsetWidth;
            if (menuWidth > window.innerWidth || menuWidth < window.innerWidth) {
                setHideRightArrow(false);
                setHideLeftArrowRTL(false);
            } else {
                setHideRightArrow(true);
                setHideLeftArrowRTL(true);
            }
        }, 500)

        return () => {
            // eslint-disable-next-line
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        }

        // eslint-disable-next-line
    }, []);

    const handleResize = () => {

        setWidth(window.innerWidth - 500);

    }

    const setNavActive = (item) => {
        MENUITEMS.filter(menuItem => {
            if (menuItem !== item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                        return true
                    }
                    else {
                        return false
                    }
                })
            }
            return menuItem
        })
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    const toggletNavActive = (item) => {
        if (!item.active) {
            MENUITEMS.forEach(a => {
                if (MENUITEMS.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: MENUITEMS })
    }

    const scrollToRight = () => {
        const elmnt = document.getElementById("myDIV");
        const menuWidth = elmnt.offsetWidth;
        const temp = menuWidth + margin;
        if (temp < menuWidth) {
            setMargin(-temp);
            setHideRightArrow(true);
        }
        else {
            setMargin(margin => margin += (-width));
            setHideLeftArrow(false);
        }
    }

    const scrollToLeft = () => {
        if (margin >= -width) {
            setMargin(0)
            setHideLeftArrow(true);
        }
        else {
            setMargin(margin => margin += width);
            setHideRightArrow(false);
        }
    }


    const scrollToLeftRTL = () => {

        if (margin < -width) {
            setMargin(margin => margin += -width);
            setHideLeftArrowRTL(true);
        }
        else {
            setMargin(margin => margin += -width);
            setHideRightArrowRTL(false);
        }
    }

    const scrollToRightRTL = () => {
        const temp = width + margin

        if (temp === 0) {
            setMargin(temp);
            setHideRightArrowRTL(true);
        }
        else {
            setMargin(margin => margin += width);
            setHideRightArrowRTL(false);
            setHideLeftArrowRTL(false);
        }
    }

    return (
        <Fragment>
            <div className={`page-sidebar ${switchToggle ? 'open' : sidebar_background_color}`}>
                <div className="main-header-left d-none d-lg-block">
                    <div className="logo-wrapper compactLogo">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <h1 className='text-center font-weight-bold'>Autofixo</h1>
                            {/* <img className="blur-up lazyloaded light" src={logo_light} alt="" />
                            <img className="blur-up lazyloaded compactlogo" src={logo_compact} alt="" />
                            <img className="blur-up lazyloaded logo" src={logo} alt="" /> */}
                        </Link>
                    </div>
                </div>
                <div className="sidebar custom-scrollbar">
                    <ul
                        className="sidebar-menu"
                        id="myDIV"
                        style={wrapper === 'horizontal_sidebar' ? layout === 'rtl' ? { 'marginRight': margin + 'px' } : { 'marginLeft': margin + 'px' } : { margin: '0px' }} >
                        <li className={`left-arrow ${layout === 'rtl' ? hideLeftArrowRTL ? 'd-none' : '' : hideLeftArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToLeftRTL : scrollToLeft}><i className="fa fa-angle-left"></i></li>
                        {
                            MENUITEMS.map((menuItem, i) => {

                                return menuItem.show ? (<li className={`${menuItem.active ? 'active' : ''}`} key={i}>
                                    {(menuItem.sidebartitle) ? <div className="sidebar-title">{menuItem.sidebartitle}</div>
                                        : ''}
                                    {(menuItem.type === 'sub') ?
                                        <a title={`${menuItem.title}`} className="sidebar-header" href="#javascript" onClick={() => toggletNavActive(menuItem)}>
                                            <menuItem.icon />
                                            <span >{menuItem.title.length > 14 ? `${menuItem.title.substr(0, 14)}...` : menuItem.title.substr(0, 14)}</span>
                                            <i className="fa fa-angle-right pull-right"></i>
                                        </a>
                                        : ''}
                                    {(menuItem.type === 'link') ?
                                        <Link title={`${menuItem.title}`} className={`sidebar-header ${menuItem.active ? 'active' : ''}`} onClick={() => toggletNavActive(menuItem)} to={menuItem.path}>
                                            <menuItem.icon /><span>{menuItem.title.length > 14 ? `${menuItem.title.substr(0, 14)}...` : menuItem.title.substr(0, 14)}</span>
                                            {menuItem.children ? <i className="fa fa-angle-right pull-right"></i> : ''}
                                        </Link>
                                        : ''}
                                    {menuItem.children ?
                                        <ul
                                            className={`sidebar-submenu ${menuItem.active ? 'menu-open' : ''}`}
                                            style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}
                                        >
                                            {menuItem.children.map((childrenItem, index) => {
                                                return childrenItem.show ? (<li key={index} className={childrenItem.children ? childrenItem.active ? 'active' : '' : ''}>
                                                    {(childrenItem.type === 'sub') ?
                                                        <a href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)} >
                                                            <i className="fa fa-circle"></i>{childrenItem.title} <i className="fa fa-angle-down pull-right"></i></a>
                                                        : ''}

                                                    {(childrenItem.type === 'link') ?
                                                        <Link title={childrenItem.title} className={childrenItem.active ? 'active' : ''} onClick={() => toggletNavActive(childrenItem)} to={childrenItem.path}>
                                                            <i className="fa fa-circle"></i>{childrenItem.title}
                                                        </Link>
                                                        : ''}

                                                    {childrenItem.children ?
                                                        <ul className={`sidebar-submenu ${childrenItem.active ? 'menu-open' : 'active'}`}>
                                                            {childrenItem.children.map((childrenSubItem, key) => {
                                                                return childrenSubItem.show && (
                                                                <li className={childrenSubItem.active ? 'active' : ''} key={key}>
                                                                    {(childrenSubItem.type === 'link') &&
                                                                        <Link className={childrenSubItem.active ? 'active' : ''}
                                                                            onClick={() => toggletNavActive(childrenSubItem)} to={childrenSubItem.path} >
                                                                            <i className="fa fa-circle"></i>{childrenSubItem.title}
                                                                        </Link>
                                                                        }
                                                                </li>)
                                                            }
                                                            )}
                                                        </ul>
                                                        : ''}
                                                </li>) : (null)

                                            }
                                            )}

                                        </ul>
                                        : ''}
                                </li>
                                ) : (null)
                            }
                            )
                        }
                        <li className={`right-arrow ${layout === 'rtl' ? hideRightArrowRTL ? 'd-none' : '' : hideRightArrow ? 'd-none' : ''}`}
                            onClick={(wrapper === 'horizontal_sidebar' && layout === 'rtl') ? scrollToRightRTL : scrollToRight}><i className="fa fa-angle-right"></i></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;