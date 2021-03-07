import styled from 'styled-components';
import { MAP_COLORS } from '../../styles/variables';

export const MenuContainer = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    background: ${MAP_COLORS.colors.secondary.normal};
    a {
        color: #fff;
        padding: 0 10px;
        display: inline-block;
        text-transform: uppercase;
        line-height: 80px;
        text-decoration: none;
        font-size: 14px;
        &.active {
            background: ${MAP_COLORS.colors.primary.normal};
            background: linear-gradient(226deg, #ff9800, #ff5722);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 25px;
            font-weight: 600;
        }
    }
    .menu {
        height: 100%;
        display: flex;
    }
`;

export const ButtonLogout = styled.button`
    border: 0;
    font-size: 20px;
    cursor: pointer;
    background: transparent;
    color: #fff;
    padding: 0 15px;
    display: flex;
    align-items: center;
    span {
        padding: 0 10px;
    }
`;