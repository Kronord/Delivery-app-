import styled from "styled-components";

export const CountWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Count = styled.span`
    display: flex;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: 1px #1680E9 solid;
    border-radius: 5px;
`

export const BtnGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

export const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
    background-color: #1680E9;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:last-child {
        margin-bottom: 0;
    }
`