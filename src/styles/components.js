import styled from 'styled-components';
import { FONTS } from './variables';

export const Container = styled.div`
    margin: 0 auto;
    position: relative;
    display: block;
    max-width: 1048px;
    .heading {
        padding: 25px;
        h1 {
            margin-bottom: 0;
        }
        p {
            margin-top: 5px;
        }
    }
    .actions {
        padding: 14px 25px;
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        background: #efefef;
        > div {
            margin-right: 10px;
        }
    }
`

export const Button = styled.button`
    height: 45px;
    border-radius: 10px;
    border: 0;
    padding: 0 15px;
    cursor: pointer;
    outline: none;
    color: #fff;
    background: #4caf50;
    text-transform: uppercase;
`

export const ButtonLarge = styled(Button)`
    height: 70px;
    padding: 0 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    font-weight: bold;
    font-family: ${FONTS.default}, sans-serif;
    span {
        margin: 0 10px;
    }
`