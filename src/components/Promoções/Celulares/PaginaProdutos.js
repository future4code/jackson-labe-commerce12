import React from 'react';
import styled from "styled-components";
import Bolsa from "./../Bolsa/Bolsa"

const ContainerProdutos = styled.div`
    background-color: black;
    color: white;
`
class PaginaProdutos extends React.Component{
    state = {
        produto: [
            {
                nome: "Item E",
                preco: 40.50,
                imagem: "https://picsum.photos/50/50",
                id: 1
            },
            {
                nome: "Item A",
                preco: 30.10,
                imagem: "https://picsum.photos/50/49",
                id: 2
            },
            {
                nome: "Item B",
                preco: 50,
                imagem: "https://picsum.photos/50/48",
                id: 3
      
            },
            {
                nome: "Item C",
                preco: 0,
                imagem: "https://picsum.photos/50/50",
                id: 4
      
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
        const produtosRender = this.state.produto.map((produto) => {
            return <div>
                <h3>Produto:{produto.nome}</h3>
                <p>Valor: R${produto.preco}</p>
                <img src={produto.imagem} />
                <button onClick={() => this.onClickCarrinho(produto.id)}>Adicionar Carrinho</button>
            </div>
        })

        

        return(
        <ContainerProdutos>{produtosRender}
        </ContainerProdutos>
        )
    }
}

export default PaginaProdutos;