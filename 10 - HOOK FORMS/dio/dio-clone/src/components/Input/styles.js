import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #503434;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
margin-right: 10px;
`

export const InputText = styled.input`
background: transparent;
color: #fff;
width: 100%;
border: 0;
height: 30px;
`

export const ErrorText = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
    `;