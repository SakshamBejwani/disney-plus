import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTAlogo1 src="/images/cta-logo-one.svg" />
                <SignUpButton>GET ALL THERE</SignUpButton>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTAlogo2 src="/images/cta-logo-two.png" />

            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    align-items: center;
    position: relative;
    display: flex;
    height: calc(100vh - 70px);
    justify-content: center;

    &:before{
        background-postion: top;
        background-size: cover;
        background: url('/images/login-background.jpg') center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
`   

const CTAlogo1 = styled.img`

`

const SignUpButton = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    margin-top: 8px;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    letter-spacing: 1.5px;
    margin-bottom: 12px;
    transition: all 200ms;
    &: hover{
        background: #0483ee;
    }
`

const Description = styled.p`
    font-size:11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const CTAlogo2 = styled.img`
    
`