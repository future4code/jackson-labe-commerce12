import React from 'react';
import styled from "styled-components";

const ContainerProdutos = styled.div`
    background-color: white;
`
class Bolsa extends React.Component{
    state = {

    }
    render(){
        return(
            <ContainerProdutos>Carrinho</ContainerProdutos>
        )
    }
}

export default Bolsa;