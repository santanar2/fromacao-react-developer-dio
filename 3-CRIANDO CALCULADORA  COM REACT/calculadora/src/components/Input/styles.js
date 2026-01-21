import styled from 'styled-components';
export const InputContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #AAAAFF;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);

    input {
        width: 1000%;
        height: 80%;
        background-color: transparent;
        border: none;
        text-align: right;
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        color: #333;
        padding: 0 16px;
    }
`;