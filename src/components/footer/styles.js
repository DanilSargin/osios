import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 1400px;
    max-width: 90%;
    margin: auto;
    position: relative;
`;

export const FooterSide = styled.div`

`;

export const Contact = styled.div`
    padding-top: 100px;
    text-align: center;
    width: 100%;
    height: 360px;
    background: #F4F3F8;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;

    text-align: center;

    color: #98DDB5
`;

export const Button = styled.button`
    margin-top: 60px;
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
    box-shadow: 0px 5px 20px rgba(52, 49, 80, 0.15);
    
`;
export const FooterBlock = styled.div`
    height: 375px;
    background: #98DDB5;
    padding-top: 60px;
`;

export const Colomns = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Colomn = styled.div`
    width: 340px;
`;

export const Logo = styled.img`
    
`;

export const Copyright = styled.p`
    margin-top: 60px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    
    color: #F4F3F8;
`;

export const ColomnName = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;

    color: #FFFFFF;
`;

export const LinksBlocks = styled.div`
    margin-top: 50px;
    display: flex;
`;

export const Block = styled.div`
    width: 170px;
`;

export const LinkBlock = styled.div`
    margin-top: 20px;
`;

export const Link = styled.a`
    position: relative;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;

    color: #F4F3F8;
`;

export const LinkSocial = styled.a`
    position: relative;
    top: -5px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 140%;

    color: #F4F3F8;
`;

export const Icon = styled.img`
    margin-right: 15px;
`;