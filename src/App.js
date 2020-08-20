import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header"
import Avaliação from './components/Avaliação'
import PaginaProdutos from './components/Promoções/Celulares/PaginaProdutos'
import Promoção1 from './components/Promoções/Promoção1'
import Promoção2 from './components/Promoções/Promoção2'
import Promoção3 from './components/Promoções/Promoção3'
import Promoção4 from './components/Promoções/Promoção4'
import Footer from './components/Footer'
import Acessorios from './components/Promoções/Acessórios/Acessorios'
import Bolsa from './components/Promoções/Bolsa/Bolsa'

const TelaToda = styled.div`
  background-color:black;
  width:98vw;
  height:100vh;
`
const HeaderStyled = styled.div`
  background-color: #CDAA7D;
  padding: 10px;

`
const ContainerSeta = styled.div `
  display:flex;
  justify-content:center;
`
const Seta = styled.img `
  width:50px;
  height:40px;
  align-self: center;
  padding:1px;
  margin-top: 5px;
  
  
`
class App extends React.Component{
  state = {
    promoção: 1,
    paginaCelular: false,
    paginaOfertas: true,
    paginaAcessorios: false,
    bolsa: false,

  }
  onClickRenderizaTelaDireita = () => {
    if (this.state.promoção < 4){
    this.setState({
      promoção: this.state.promoção +1
    })}
  }
  onClickRenderizaTelaEsquerda = () => {
    if (this.state.promoção > 1){
      this.setState({
        promoção: this.state.promoção -1
      })}
    }
  renderizaPromoção = () => {
    switch (this.state.promoção) {
      case 1:
        return <Promoção1 />
      case 2: 
        return <Promoção2 />
      case 3: 
        return <Promoção3 />
      case 4: 
        return <Promoção4 />
      default:
        return <Promoção1 />
    }
  }
onClickCelulares = () => {
    this.setState({
        paginaCelular: !this.state.paginaCelular
      });
};
onClickOfertas = () => {
  this.setState({
      paginaOfertas: !true
    });
};
onClickAcessorios = () => {
  this.setState({
      paginaAcessorios: !this.state.Acessorios
    });
};
onClickBolsa = () => {
  this.setState({
      bolsa: !this.state.bolsa
    });
};

  render(){
    const paginaCelulares = () => {
            if(this.state.paginaCelular) {
                return <PaginaProdutos funcaoClickCelular={this.onClickCelulares} />
            }
            if(this.state.paginaAcessorios) {
              return <Acessorios funcaoClickAcessorios={this.onClickAcessorios} />
            }
            if(this.state.bolsa){
              return <Bolsa funcaoClickBolsa={this.onClickBolsa} />
            }
      }
    return(
      <TelaToda>
        <HeaderStyled>
          <Header 
          funcaoClickCelulares={this.onClickCelulares} 
          funcaoClickAcessorios={this.onClickAcessorios}
          funcaoClickBolsa={this.onClickBolsa}
          />
        </HeaderStyled>
        {paginaCelulares || this.renderizaPromoção()}
        {paginaCelulares()}
        <ContainerSeta> 
          <Seta src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVApbJgbTc8PyuSeYNsp7OvYWNHJdhaHcnRjWYiGf2p0IleHTcscW4xxNvrQ_w88mpBtGd3UEsO2PZ-RMRu8N6EMmxHGfNcTyrgA&usqp=CAU&ec=45690272" onClick={this.onClickRenderizaTelaEsquerda}/>
          <Seta src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDLdNRAlNQHYxHEtc1dcVRI806KgaLGL4Dmw&usqp=CAU" onClick={this.onClickRenderizaTelaDireita}/>
        </ContainerSeta>
        <Footer />
      </TelaToda>

    )
  }
}


export default App;
