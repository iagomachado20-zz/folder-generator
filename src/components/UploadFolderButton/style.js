import styled from 'styled-components';
import { MAP_COLORS } from '../../styles/variables';

const ContainerBox = styled.div`
    position: relative;
    display: inline-block;
    max-width: 200px;
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
    border-radius: 10px;
    height: 40px;
    cursor: pointer;
    background: ${MAP_COLORS.colors.primary.normal};
    box-shadow: 0px 2px 0px #bd8630;
    display: flex;
    align-items: center;
    padding: 0 15px;
    color: #fff;
    label {
        width: 100%;
        display: block;
        text-align: center;
    }
`

export {
    ContainerBox,
    InputFile,
    Box
}