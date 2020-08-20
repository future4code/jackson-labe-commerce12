import React from 'react';
import Asus from '../img/asusrog.png'
import styled from "styled-components";

const Container = styled.div `
  display:flex;
  flex-direction:column;
  
`
const MotorolaStyled = styled.img `
  width:95%;
  height:290px;
  margin-top:30px;
  align-self: center;
  border: 2px solid #CDAA7D;
  border-radius: 5px;
  `
class Promoção2 extends React.Component {
    state = {
    }
    render(){
        return (
            <Container>
            <MotorolaStyled src={Asus}/>
            </Container>
        )
    }
}

export default Promoção2;