import React from 'react'
import img from '../img'
import {
    Container,
    TopImg,
    TopBlock,
    Left,
    TopText,
    NameApp,
    Right,
    BlockRight,
    BlockName,
    TechBlock,
    TechName,
    TechImgBlock,
    Tire,
    ImgBlocks,
    TechImg1,
    TechImg2,
    TechImg3,
    Button,
    AppLinks,
    AppButton,

    SlidesBlock,
    SlidesBackImage,
    SlidesBlockName,
    Colomns,
    Colomn,
    InnerColomnBlock,
    ColomnName,
    ColomnText,
    PhoneSlide,

    AdminPanel,
    AdminBlocks,
    AdminText,
    AdminName,
    AdminButton,
    AdminImg
} from './styles'

function Main() {

    return (
        <Container>
            <TopBlock>
                <Left>
                    <TopText><NameApp>Vilka App</NameApp> - Delivery of food from<br></br> all restaurants to your home</TopText>
                    <TopImg src={img.topImg} />
                </Left>
                <Right>
                    <BlockRight>
                        <BlockName>Implementation technologies:</BlockName>
                        <TechBlock>
                            <TechName><Tire>—</Tire>Backend</TechName>
                            <ImgBlocks>
                                <TechImgBlock>
                                    <TechImg1 src={img.node} />
                                </TechImgBlock>
                                <TechImgBlock>
                                    <TechImg2 src={img.mongo} />
                                </TechImgBlock>
                            </ImgBlocks>
                        </TechBlock>

                        <TechBlock>
                            <TechName><Tire>—</Tire>Frontend</TechName>
                            <TechImgBlock>
                                <TechImg3 src={img.react} />
                            </TechImgBlock>
                        </TechBlock>
                        <Button>Go to the site</Button>
                        <AppLinks>
                            <AppButton src={img.appStore} />
                            <AppButton src={img.googlePlay} />
                        </AppLinks>
                    </BlockRight>
                </Right>
            </TopBlock>



            <SlidesBlock>
                <SlidesBackImage src={img.slideBack}/>
                <SlidesBlockName>For application users</SlidesBlockName>

                <Colomns>
                    <Colomn>
                        <InnerColomnBlock>
                            <ColomnName>Convenience</ColomnName>
                            <ColomnText>Everything is easy, fast and clear</ColomnText>
                        </InnerColomnBlock>

                        <PhoneSlide src={img.slide1}/>
                    </Colomn>

                    <Colomn>
                        <InnerColomnBlock>
                            <ColomnName>Reliability</ColomnName>
                            <ColomnText>Your data is completely safe!</ColomnText>
                        </InnerColomnBlock>

                        <PhoneSlide src={img.slide2}/>
                    </Colomn>

                    <Colomn>
                        <InnerColomnBlock>
                            <ColomnName>Search by name</ColomnName>
                            <ColomnText>We make it possible to find your favorite restaurant or dish.</ColomnText>
                        </InnerColomnBlock>

                        <PhoneSlide src={img.slide3}/>
                    </Colomn>

                    <Colomn>
                        <InnerColomnBlock>
                            <ColomnName>Leave reviews</ColomnName>
                            <ColomnText>You can leave a review about the restaurant where you made an order</ColomnText>
                        </InnerColomnBlock>

                        <PhoneSlide src={img.slide4}/>
                    </Colomn>
                </Colomns>
            </SlidesBlock>




            <AdminPanel>
                <SlidesBlockName>For restaurant owners</SlidesBlockName>
                <AdminBlocks>
                    <Left>
                        <AdminName>Convenient admin panel<br></br> for restaurant owners</AdminName>
                        <AdminText>For restaurant owners, a WEB application with <br></br>the ability to manage all their services.</AdminText>
                        <AdminButton>Владеете рестораном? Попробуйте Vilka</AdminButton>
                    </Left>

                    <Right>
                        <AdminImg src={img.admin}/>
                    </Right>
                </AdminBlocks>
            </AdminPanel>
        </Container>
    )


}

export default Main