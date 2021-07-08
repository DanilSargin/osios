import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 1400px;
    height: 100px;
    max-width: 90%;
    margin: auto;
    position: relative;
`;

export const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`;

export const Linksblock = styled.div`
    display: flex;
    margin-left: 250px;
`;

export const Link = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;
    margin-right: 100px;
`;

export const Button = styled.button`
    width: 177px;
    height: 46px;
    background: #0094FF;
    border:none;
    border-radius: 4px;

    font-weight: bold;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #FFFFFF;
`;

export const Logo = styled.img`
    width: 185px;
    height: 38px;
`;