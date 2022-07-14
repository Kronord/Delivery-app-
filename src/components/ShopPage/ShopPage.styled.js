import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const GalleryBox = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 700px;
    margin-left: 150px;
`

export const ShopsBox = styled.div`
    width: 200px;
`

export const ShopsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const Item = styled.li`
    margin-top: 30px;
    &:first-child {
        margin-top: 0px;
    };
`
export const Text =  styled.p`
    font-size: 24px;
    color: #1680E9;
`