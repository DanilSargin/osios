import React from 'react'
import img from '../../img'
import {
    FooterSide,
    Container,
    Contact,
    Text,
    Button,
    FooterBlock,
    Colomns,
    Colomn,
    LinkBlock,
    Logo,
    Copyright,
    ColomnName,
    LinksBlocks,
    Block,
    Link,
    Icon,
    LinkSocial
} from './styles'

function Footer() {

    return (
        <FooterSide>
            <Contact>
                <Text>Do you wnat to discuss your project?</Text>
                <Button>Contact Us</Button>
            </Contact>

            <FooterBlock>
                <Container>
                    <Colomns>
                        <Colomn>
                            <Logo src={img.logoWhite} />
                            <Copyright>OXIOS © 2020  All Rights Reserved</Copyright>
                        </Colomn>

                        <Colomn>
                            <ColomnName>Links</ColomnName>
                            <LinksBlocks>
                                <Block>
                                    <LinkBlock>
                                        <Link>Our works</Link>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Link>Technologies</Link>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Link>About Us</Link>
                                    </LinkBlock>

                                </Block>
                                <Block>
                                    <LinkBlock>
                                        <Link>Blog</Link>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Link>Contact Us</Link>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Link>Get a Checklist</Link>
                                    </LinkBlock>

                                </Block>
                            </LinksBlocks>
                        </Colomn>

                        <Colomn>
                            <ColomnName>Follow Us</ColomnName>
                            <LinksBlocks>
                                <Block>
                                    <LinkBlock>
                                        <Icon src={img.twitter} /><LinkSocial>Twitter</LinkSocial>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Icon src={img.instagram} /><LinkSocial>Instagram</LinkSocial>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Icon src={img.facebook} /><LinkSocial>Facebook</LinkSocial>
                                    </LinkBlock>

                                    <LinkBlock>
                                        <Icon src={img.linkedin} /><LinkSocial>Linkedin</LinkSocial>
                                    </LinkBlock>
                                </Block>

                            </LinksBlocks>
                        </Colomn>
                    </Colomns>
                </Container>
            </FooterBlock>
        </FooterSide>

    )


}

export default Footer