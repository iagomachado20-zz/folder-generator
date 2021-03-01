import styled from 'styled-components';
import { FONTS, MAP_COLORS } from './variables';

const total_grids = 12;

export const Container = styled.div`
    margin: 0 auto;
    position: relative;
    display: block;
    max-width: 1048px;
    .heading {
        padding: 25px 0;
        h1 {
            margin-bottom: 0;
        }
        p {
            margin-top: 5px;
        }
        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .back-button {
        cursor: pointer;
        background: black;
        border: 0;
        color: #ffffff;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        font-family: ${FONTS.default}, sans-serif;
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

export const ButtonSmall = styled(Button)`
    height: 30px;
    padding: 0 10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-transform: none;
    font-weight: 400;
    font-family: ${FONTS.default}, sans-serif;
    background: ${MAP_COLORS.colors.primary.normal};
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`

export const Grid = styled.div`
    padding: 0 15px;
    box-sizing: border-box;
    width: ${({size}) => (size ? size / 12 * 100 : '8.33')}%;
`

export const InputField = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 1.0);
    border-radius: 4px;
    padding: 0 15px;
    box-sizing: border-box;
    font-family: ${FONTS.default}, sans-serif;
    font-size: 14px;
    outline: none;
    &:focus, &:hover {
        border-color: ${MAP_COLORS.colors.primary.normal};
    }
`;

export const SelectField = styled(InputField).attrs({
    as:'select'
})``;

export const FormGroup = styled.div`
    margin-bottom: 10px;
`

export const LabelForm = styled.label`
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
`

export const HintForm = styled.div`
    margin: 3px 0;
    font-weight: bold;
    font-size: 13px;
`;