import styled from 'styled-components';

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    margin: 5px -15px;
    flex-wrap: wrap;
    .title {
        width: 100%;
        p {
            margin-bottom: 5px;
            margin-top: 10px;
            padding: 0 15px;
        }
    }
    .block {
        padding: 15px;
        label {
            display: block;
            font-size: 12px;
            margin-bottom: 5px;
        }
        input[type="number"] {
            border-radius: 30px;
            height: 40px;
            border: 1px solid #ccc;
            padding: 0 15px;
            outline: none;
        }
    }
`

export const Sidebar = styled.aside`
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    padding: 0 30px;
    box-sizing: border-box;
`;