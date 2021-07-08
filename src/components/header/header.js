import React from 'react'
import img from '../../img'
import {
    Container,
    HeaderBlock,
    Linksblock,
    Link,
    Button,
    Logo
} from './styles'

function Header() {

    return (
        <Container>
            <HeaderBlock>
                <Logo
                    src={img.logo}
                    alt='Logo'
                    className='lazyload'/>
                    <Linksblock>
                        <Link>Our Works</Link>
                        <Link>Technologies</Link>
                        <Link>About Us</Link>
                        <Link>Blog</Link>
                    </Linksblock>
                    <Button>Hire Us</Button>
            </HeaderBlock>
            
        </Container>
    )


}

export default Header