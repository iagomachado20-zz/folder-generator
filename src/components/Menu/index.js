import React from 'react';
import { MenuContainer } from './style';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { MAP_ROUTES } from '../../routes';

const Menu = () => {

    return (
        <MenuContainer>
            {
                MAP_ROUTES.map((route, index) => {

                    if (route.key === '/' || !route.visibleMenu) return null;

                    return <NavLink key={index} activeClassName="active" to={route.key}>{route.label}</NavLink> 

                })
            }
            
        </MenuContainer>
    )
};  

export default Menu;

