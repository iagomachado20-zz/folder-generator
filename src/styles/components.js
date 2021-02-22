import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    position: relative;
    display: block;
    max-width: 1048px;
    .heading {
        background-color: #fff;
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
        align-items: center;
        background: #efefef;
        > div {
            margin-right: 2.5%;
        }
    }
`