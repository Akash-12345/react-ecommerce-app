import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
     width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper=styled.div`
    width: 40%;
    background-color: orange;
`
const Form=styled.form`
    
`
const Title=styled.h1`
    
`
const Input=styled.input`
    
`
const Aggrement=styled.span`
    
`
const Button=styled.button`
    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Aggrement>
                    By creating this account , I consent to processing personal data with <b>PRIVACY POLICY</b>
                </Aggrement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register