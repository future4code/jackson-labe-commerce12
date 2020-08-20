import React from 'react';
import styled from "styled-components";
import Motorola from '../img/motorola-one-fusion.png'

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
class Promoção1 extends React.Component {
    state = {
    }
    render(){
        return (
            <Container>
            <MotorolaStyled src={Motorola}/>
            </Container>
        )
    }
}

export default Promoção1;