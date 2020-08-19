import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header"
import Promoção1 from './components/Promoções/Promoção1'
import Promoção2 from './components/Promoções/Promoção2'

const TelaToda = styled.div`
  background-color:black;
  width:98vw;
  height:100vh;
`
const HeaderStyled = styled.div`
  background-color: #CDAA7D;
  padding: 10px;

`
class App extends React.Component{
  state = {
    promoção: 1,

  }
  onClickRenderizaTela = () => {
    this.setState({
      promoção: this.state.promoção +1
    })
  }
  renderizaPromoção = () => {
    switch (this.state.promoção) {
      case 1:
        return <Promoção1 />
      case 2: 
        return <Promoção2 />
      default:
        return <div></div>
    }
  }

  render(){
    return(
      <TelaToda>
        <HeaderStyled>
          <Header/>
        </HeaderStyled>
        {this.renderizaPromoção()}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDLdNRAlNQHYxHEtc1dcVRI806KgaLGL4Dmw&usqp=CAU" onClick={this.onClickRenderizaTela}/>
      </TelaToda>
    )
  }
}


export default App;
