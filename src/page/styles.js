import styled, { css } from 'styled-components'
import img from '../img'

export const Container = styled.div`
    width: 1400px;
    max-width: 90%;
    min-height: calc(100vh - 120px);
    margin: auto;
    position: relative;
`;

export const TopBlock = styled.div`
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
`;

export const Left = styled.div`

`;

export const TopText = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 120%;

    color: #000000;
`;

export const TopImg = styled.img`

`;

export const NameApp = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;

    color: #000000;
`;

export const Tire = styled.span`
    font-weight: 600;
    margin-right: 10px;
    color: #AFABD4;
`;

export const Right = styled.div`

`;

export const BlockRight = styled.div`
    width: 470px;
    height: 500px;

    border: 1px solid #AFABD4;
    box-sizing: border-box;
    border-radius: 8px;

    margin-top: 50px;

    padding: 30px;
`;

export const BlockName = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 12px;

    color: #1F1235;
`;

export const TechBlock = styled.div`
    
`;

export const TechName = styled.p`
    font-size: 18px;
    line-height: 140%;

    color: #1B1425;
`;

export const TechImgBlock = styled.div`
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 30px;
    margin-right: 20px;
    width: 113px;
    height: 54px;
    border: none;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    text-align: center;
`;

export const ImgBlocks = styled.div`
    display: flex;
`;


export const TechImg1 = styled.img`
    margin-top: 8px;
`;

export const TechImg2 = styled.img`
    margin-top: 12px;
`;

export const TechImg3 = styled.img`

`;

export const Button = styled.button`
    width: 349px;
    height: 37px;
    margin-left: 30px;
    margin-top: 30px;

    background: #FFFFFF;
    border: 1px solid #AFABD4;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;

    text-align: center;

    color: #000000;
`;

export const AppLinks = styled.div`
    display: flex;
    margin-top: 10px;
    width: 100%;
    margin-left: 30px;
`;

export const AppButton = styled.img`
    margin-right: 10px;   
`;

export const SlidesBlock = styled.div`
    position: relative;
    background: ${img.slideBack};
    height: 1400px;
    padding-top: 80px;
`;

export const SlidesBackImage = styled.img`
    position: absolute;
    top: 0;
    z-index: 1;
`;

export const SlidesBlockName = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -1px;

    color: #222222;

`;

export const Colomns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
`;

export const Colomn = styled.div`
    width: 280px;
    z-index: 100;
`;

export const InnerColomnBlock = styled.div`
    position: relative;
    z-index: 100;
    height: 210px;
    border-left: 10px solid #4D4545;
    padding-left: 20px;

`;

export const ColomnName = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 26px;

    color: #000000;
`;

export const ColomnText = styled.p`
    margin-top: 15px;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.35px;

    color: #000000;
`;

export const PhoneSlide = styled.img`
    margin-top: 60px;
`;



export const AdminPanel = styled.div`
    position: relative;
    top: -110px;
    height: 600px;
`;

export const AdminBlocks = styled.div`
    display: flex;
    margin-top: 100px;
`;

export const AdminName = styled.p`;
    font-weight: 600;
    font-size: 40px;
    line-height: 50px;

    letter-spacing: -1px;

    color: #222222;
`;

export const AdminText = styled.p`;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    margin-top: 60px;
    color: #000000;

    opacity: 0.7;
`;

export const AdminButton = styled.button`;
    width: 349px;
    height: 37px;
    margin-top: 155px;

    background: #FFFFFF;
    border: 1px solid #AFABD4;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 100%;

    text-align: center;

    color: #000000;
`;

export const AdminImg = styled.img`;
    position: relative;
    top: -70px;
    width: 756px;
    height: 527px;
`;