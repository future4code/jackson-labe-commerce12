import React from 'react';
import Avaliação from '../Avaliação'
import styled from "styled-components";
import Motorola from '../img/motorola-one-fusion.png'

const MotorolaStyled = styled.img `
  width:90%;
  height:320px;
  margin-top:30px;
  
  justify-content:center;
  `
class Promoção1 extends React.Component {
    state = {
    produto:[
        {
        foto: "https://a-static.mlcdn.com.br/600x600/smartphone-samsung-galaxy-a10s-32gb-vermelho-4g-2gb-ram-62-cam-dupla-selfie-8mp/magazineluiza/155568600/b51f07946dcdddaaba70ba6a96d5832a.jpg",
        titulo: "Smartphone Samsung Galaxy A10s 32GB Vermelho - 4G 2GB RAM 6,2” Câm. Dupla + Selfie 8MP",
        id: Date.now(),
    },
]}
    render(){
        return (
            <div>
            <MotorolaStyled src={Motorola}/>
                <Avaliação />
            </div>
        )
    }
}

export default Promoção1;