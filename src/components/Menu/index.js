import React from 'react';
import { ButtonLogout, MenuContainer } from './style';

import { NavLink } from "react-router-dom";
import { MAP_ROUTES } from '../../routes';
import { clearStorage, getToken } from '../../config/auth';
import { useHistory } from 'react-router-dom';

const Menu = () => {

    const history = useHistory();

    const logout = () => {

        clearStorage();
        history.push('login');

    };

    return (
        <MenuContainer>
            <div className="menu">
                {
                    MAP_ROUTES.map((route, index) => {

                        if (route.key === '/' || !route.visibleMenu) return null;

                        return <NavLink key={index} activeClassName="active" to={route.key}>{route.label}</NavLink> 

                    })
                }
            </div>
            {
                getToken() && (
                    <ButtonLogout title="Sair" onClick={() => logout()}>
                        <span className="material-icons">logout</span>
                    </ButtonLogout>
                )
            }
            
        </MenuContainer>
    )
};  

export default Menu;

