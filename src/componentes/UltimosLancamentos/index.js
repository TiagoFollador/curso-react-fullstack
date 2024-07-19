import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import styled from "styled-components";
import imagemLivro from "../../imagens/livro2.png";
import CardRecomenda from "../CardRecomenda";




const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00"  
                tamanhoFonte="36px" 
                >Ultimos Lancamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt="imagem do livro"/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez voce se interesse por"
                subtitiulo="Java"
                descricao="public static void main(Args[]){
                    System.out.println('Corra');
                }"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;