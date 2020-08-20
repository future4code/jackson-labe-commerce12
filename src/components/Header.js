import React from 'react';
import styled from "styled-components";
import Sacola from './img/sacolinha_sem_fundo.png'

const Titulo = styled.h3`
    text-align:center;
`
const InputPersonalizado = styled.input`
  background-color: #F1F1F3;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.25);
  border: none;
  width: ${props => props.width};
  height: 35px;
  width: 70%;
  outline: none;
  margin: 10px 5px 10px 50px;
  border-radius: 5px;
`
const SeçãoHeader = styled.span`
    padding: 5px;
`
const SacolaStyled = styled.img`
    width: 30px;
    height: 30px;
    
    
`
const ContainerHeader = styled.div`
    display:flex;
    justify-content: space-around;
`

class Header extends React.Component{
    state = {

    }

    render(){
        return(
            <div>
                <Titulo>Labe E-Commerce</Titulo>
                <InputPersonalizado placeholder="buscar" />
               <ContainerHeader>
                    <SeçãoHeader>Ofertas do dia</SeçãoHeader>
                    <SeçãoHeader>Celulares</SeçãoHeader>
                    <SeçãoHeader>Acessórios</SeçãoHeader>
                    <SacolaStyled src={Sacola}/>
                </ContainerHeader>
            </div>
        )
    }
}
export default Header;