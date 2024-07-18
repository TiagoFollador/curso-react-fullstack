import styled from 'styled-components';

const Options = styled.ul`
    display: flex;
`
const Option = styled.ul`
    font-size: 16px;        
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    text-align: center;
`

const textOptions =['Categorias', 'Favoritos', 'Minha Estante']


function OptionsHeader() {
    return(
        <Options>
            { textOptions.map( (text) => (
              <Option><p>{text}</p></Option>
            ) ) }
        </Options>
    )
}

export default OptionsHeader;