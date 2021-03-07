import styled from 'styled-components';
import { MAP_COLORS } from '../../styles/variables';

const ContainerBox = styled.div`
    position: relative;
    display: inline-block;
    max-width: 200px;
    margin: 0 5px;
    .box {
        position: relative;
    }
    h4 {
        margin-bottom: 5px;
        margin-top: 0;
    }
`

const InputFile = styled.input`
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    cursor: pointer;
    position: absolute;
`

const Box = styled.div`
    cursor: pointer;
    color: ${MAP_COLORS.colors.secondary.normal};
    display: flex;
    align-items: center;
    padding: 0;
    min-width: 100px;
    border: 0;
    label {
        width: 100%;
        font-weight: bold;
        font-size: 14px;
        display: block;
        text-align: center;
    }
`

export {
    ContainerBox,
    InputFile,
    Box
}