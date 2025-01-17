import profile from '../../imagens/perfil.svg'
import shoppingCart from '../../imagens/sacola.svg'
import styled from 'styled-components';

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [profile, shoppingCart];

function IconsHeader() {
    return (
        <Icons>
            { icons.map( (icon) => (
              <Icon ><img alt='icones' src={icon} ></img></Icon>
            ) ) }
        </Icons>
    );
}

export default IconsHeader;