import React from 'react';
import MotorolaEdge from '../img/motorolaedgeplus.png'
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
class Promoção4 extends React.Component {
    state = {
    }
    render(){
        return (
            <Container>
            <MotorolaStyled src={MotorolaEdge}/>
            </Container>
        )
    }
}

export default Promoção4;