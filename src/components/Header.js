import React from 'react';
import styled from "styled-components";
import Sacola from './img/sacolinha_sem_fundo.png'
import App from '../App'
import Logotipo from './img/logotipo.png'

const Titulo = styled.img`
   margin-left: 56px;
   margin-top: 10px;
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
                <Titulo src={Logotipo} />
                <InputPersonalizado placeholder="buscar" />
               <ContainerHeader>
                    <SeçãoHeader onClick={this.props.funcaoClickOfertas}>Ofertas do dia</SeçãoHeader>
                    <SeçãoHeader onClick={this.props.funcaoClickCelulares}>Celulares</SeçãoHeader>
                    <SeçãoHeader onClick={this.props.funcaoClickAcessorios}>Acessórios</SeçãoHeader>
                    <SacolaStyled onClick={this.props.funcaoClickBolsa} src={Sacola}/>
                </ContainerHeader>
            </div>
        )
    }
}
export default Header;