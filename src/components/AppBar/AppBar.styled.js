import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #1680E9;
    margin-bottom: 80px;
`;

export const Nav = styled(NavLink)`
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    margin-left: 150px;
`;