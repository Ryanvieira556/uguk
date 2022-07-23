import * as C from './styles'
import Logo from '../../Img/logo.svg'
import IconMenuMobile from '../../Img/menuIcon.png'
import { useState } from 'react'

export const Header = ( ) => {
    const [show, setShow] = useState(false)
const handleShow = () => {
    setShow( !show )
}
    return (
<C.Container>
<C.Header>
    <C.HeaderContent>
    <C.HeaderLogo>
        <img src={Logo} alt="" />
    
    </C.HeaderLogo>

    <C.IconMobile  onClick={handleShow}>
    <img src={IconMenuMobile} alt="" width={50}/>
            </C.IconMobile>

    <C.HeaderMenu>
      
    <C.Nav>
        <C.Ul>
<C.Li>Home</C.Li>
<C.Li>Sobre</C.Li>
<C.Li>Jogos</C.Li>
<C.Li>Contatos</C.Li>

        </C.Ul>
    </C.Nav>
    </C.HeaderMenu>
    </C.HeaderContent>
</C.Header>
{show && 
<C.ContainerMenuMobile>
<C.UlMobile>
<C.LiMobile>Home</C.LiMobile>
<C.LiMobile>Sobre</C.LiMobile>
<C.LiMobile>Jogos</C.LiMobile>
<C.LiMobile>Contatos</C.LiMobile>

        </C.UlMobile>
</C.ContainerMenuMobile>
}

</C.Container>
    )
}