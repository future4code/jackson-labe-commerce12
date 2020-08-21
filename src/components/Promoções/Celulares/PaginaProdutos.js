import React from 'react';
import styled from "styled-components";
import Bolsa from "./../Bolsa/Bolsa"


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
  margin-top: 2vh;
  border: 2px solid #CDAA7D;
  border-radius: 5px;
  position: center;
  display: flex;
  justify-content:absolute;
  padding-top:10px;
`
const Botao = styled.button`
  width:15vh;
  height:6vh;
  border: 3 px solid white;
  border-radius: 5px;
  background-color: #CDAA7D;
  margin-bottom: 3vh;
  position: center;
  margin-top: 20px;
`
const Produto = styled.h3`
  width:15vh;
  height:6vh;
  display:flex;

`
const Valor = styled.p`
  width:15vh;
  height:6vh;
  margin-top: none;
  text-align: center;
  position: center;
`
class PaginaProdutos extends React.Component{
    state = {
         produto: [
            {
                nome: "ROG Phone II Black Asus 4G 8GB 128GB Câm.Dual 48 13MP",
                preco: 3.759,
                imagem: "/imgs/asusROG.png",
                id: 1
            },
            {
                nome: "Moto One Fusion Azul Indigo 128GB Câm de 64 MP",
                preco: 2.249,
                imagem: "/imgs/motorola-one-fusionN.png",
                id: 2
            },
            {
                nome: "Motorola Edge+ Thunder Grey 256GB Câm de 108 MP",
                preco: 4.957,
                imagem: "/imgs/motorolaEdgePlus.png",
                id: 3
            },
            {
                nome: "Nokia NK004 Cinza 32GB Câm Dual 13MP",
                preco: 1.212,
                imagem: "/imgs/nokia6.2N.png",
                id: 4
            },
            {
                nome: "Samsung Galaxy A51 Azul 128GB Câm Quad 48MP",
                preco: 1.729,
                imagem: "/imgs/samsungA51.png",
                id: 5
            }],
        carrinho: []
    }
    componentDidUpdate() {
        const produtosCarrinho = this.state.carrinho
        localStorage.setItem("produto", JSON.stringify(produtosCarrinho)) 
    }   
    componentDidMount() {
        const produtoString = localStorage.getItem("produto");
        const produtoObjeto = JSON.parse(produtoString);
        if (produtoObjeto) {
          this.setState({
            nome: produtoObjeto.nome,
            preco: produtoObjeto.preco,
            imagem: produtoObjeto.imagem,
            id: produtoObjeto.id
          });
        }
      }
    onClickCarrinho = (id) => {
        const novoCarrinho = this.state.carrinho

        const novoArrayDeProdutos = this.state.produto.filter((produto) => {
            if(id === produto.id) {
                return produto
            }
        })

        novoCarrinho.push(novoArrayDeProdutos[0])

        this.setState({carrinho: novoCarrinho})
        console.log(this.state.carrinho)
    }
    
    render(){

         const produtosRender = this.state.produto.map((produto) => {
            return( 
                <ContainerProdutos>
                    <CardStyled src = {produto.imagem} />
                    <Produto>{produto.nome}</Produto>
                    <Valor>Valor: R${produto.preco}</Valor>
                    <Botao onClick={() => this.onClickCarrinho(produto.id)}>Adicionar Carrinho</Botao>
                </ContainerProdutos>
            )
        })
        return(produtosRender)

       const carrinhoRender = () => {
            const itensCarrinho = this.state.produto.map((produto) => {
                return (
                    <div>
                        <p>Produto: {produto.nome}</p>
                        <p>Valor: {produto.preco}</p>
                        <button>Deletar</button>
                    </div>
                ) 
            })
            return itensCarrinho
        }
        return(
        <ContainerProdutos>{produtosRender}
        </ContainerProdutos>
        )
    }
}

export default PaginaProdutos;