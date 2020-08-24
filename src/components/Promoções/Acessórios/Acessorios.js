import React from 'react';
import styled from "styled-components";



const ContainerProdutos = styled.div`
    background-color: black;
    color:#CDAA7D;
    display: grid;
    grid-template-columns:1fr 1fr  ;
    grid-template-rows:1fr   ;
  
`
const CardStyled = styled.img `
    width:20vh;
    height:20vh;
    display: grid;
    margin-top:35px;
    border: 2px solid #CDAA7D;
    border-radius: 5px;
    margin-bottom:10px;
    margin-left:10px;
` 
const Botao = styled.button`
    width:15vh;
    height:6vh;
    border-radius:5px;
    background-color: #CDAA7D;
    margin-top:80px;
`
class Acessorios extends React.Component {
    state = {
        produto: [
            {
                nome: "Carregador",
                preco: 40.55,
                imagem:"/imagens/carregador.png",
                id: 2
           
            },
            {
                nome: "Power Bank",
                preco: 30.15,
                imagem:"/imagens/powerbank.png",
                id: 2
            },
            {
                nome: "Fone",
                preco: 34.99,
                imagem:"/imagens/fonefio.png",
                id: 3
            },
            {
                nome: "Fone Bluetooth",
                preco: 29.99,
                imagem:"/imagens/fonebluetooth.png",
                id: 4
            }],
        
        carrinho: [],
    }

    
    render() {
        const produtosRender= this.state.produto.map((produto) => {
        return( 
        <ContainerProdutos>
            <h3>{produto.nome}</h3>
            <p>Valor:R${produto.preco}</p>
            <CardStyled src={produto.imagem}/>
            <Botao onClick={() => this.onClickCarrinho(produto.id)}>Adicionar Carrinho</Botao>
        </ContainerProdutos>
        
        )
    });
    return(produtosRender)
}
}
   
        
    const carrinhoRender = () => {
        const itensCarrinho = this.state.acessorio.map((produto) => {
                return (
                     <ContainerProdutos>
                        <p>Produto: {produto.nome}</p>
                        <p>Valor: {produto.preco}</p>
                        <button>Deletar</button>
                    </ContainerProdutos>
                    
                )
            }) 
}
export default Acessorios;