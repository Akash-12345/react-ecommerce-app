
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React from 'react'

const Container=styled.div`
    background-color: #fcf5f5;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const Title=styled.h1`
font-size: 70px;
    margin: 5px;
`
const Desc=styled.div`
font-size: 24px;
     margin: 5px;
`
const InputContainer=styled.div`
width: 50%;height:40px;
display: flex;
justify-content: space-between;
margin: 5px;
border: 1px solid lightgray
`
const Input=styled.input`
border: none;
margin: 5px;
padding: 10px;
`
const Button=styled.button`
margin: 5px;
border: none;
background-color: teal;
color: white;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Latest Updates of your favourite products</Desc>
        <InputContainer>
           <Input  placeholder="your email"/>
           <Button>
              <Send/>
           </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter