import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header"
import Avaliação from './components/Avaliação'
import Promoção1 from './components/Promoções/Promoção1'
import Promoção2 from './components/Promoções/Promoção2'
import Promoção3 from './components/Promoções/Promoção3'
import Promoção4 from './components/Promoções/Promoção4'
import Footer from './components/Footer'

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
`
const Seta = styled.img `
  width:50px;
  height:40px;
  align-self: center;
  padding:1px;
  
  
`
class App extends React.Component{
  state = {
    promoção: 1,

  }
  onClickRenderizaTelaDireita = () => {
    this.setState({
      promoção: this.state.promoção +1
    })
  }
  onClickRenderizaTelaEsquerda = () => {
    this.setState({
      promoção: this.state.promoção -1
    })
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

  render(){
    return(
      <TelaToda>
        <HeaderStyled>
          <Header/>
        </HeaderStyled>
        {this.renderizaPromoção()}
        <ContainerSeta> 
          <Avaliação />
          <Seta src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVApbJgbTc8PyuSeYNsp7OvYWNHJdhaHcnRjWYiGf2p0IleHTcscW4xxNvrQ_w88mpBtGd3UEsO2PZ-RMRu8N6EMmxHGfNcTyrgA&usqp=CAU&ec=45690272" onClick={this.onClickRenderizaTelaEsquerda}/>
          <Seta src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDLdNRAlNQHYxHEtc1dcVRI806KgaLGL4Dmw&usqp=CAU" onClick={this.onClickRenderizaTelaDireita}/>
        </ContainerSeta>
        <Footer />
      </TelaToda>

    )
  }
}


export default App;
