import React from 'react';
import styled from "styled-components";
import Icone1 from "./img/icone_facebook.png";
import Icone2 from "./img/icone_instagram.png";
import Icone3 from "./img/icone_twitter.png";

const ContainerFooter = styled.div`
    background-color: #CDAA7D;
`
const Icones = styled.img `
    display:inline;
    width:50px;
    height:50px;
    padding-bottom:10px;
    margin: 5px;
    margin-right: 6px;
    margin-left: 53px;
`
const Redes = styled.p `
    display:flex;
    justify-content:center;
    padding-top:10px;
    font-weight:bold;

`
class Footer extends React.Component {
    state = {

    }
    render() {
        return(
            <ContainerFooter>
                <Redes>Redes Sociais:</Redes>
                <Icones src={Icone1}/>
                <Icones src={Icone2}/>
                <Icones src={Icone3}/>
            </ContainerFooter>
        )
    }
}
export default Footer;