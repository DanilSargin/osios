import React from 'react'
import Header from '../header'
import Footer from '../footer'
import {
    Container
} from './styles'

function Wrapper(props) {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer/>
        </>
    )
}

export default Wrapper