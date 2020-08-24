import React from 'react';
import styled from "styled-components";

const ContainerProdutos = styled.div`
    background-color: white;
    background-color: black;
`
class Bolsa extends React.Component{
    state = {

    }
    render(){
        return(
            <ContainerProdutos>
                Carrinho
                {this.props.funcaoCarrinho}
                </ContainerProdutos>
        )
    }
}

export default Bolsa;