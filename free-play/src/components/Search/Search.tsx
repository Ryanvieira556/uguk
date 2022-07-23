import * as C from './styles'
import IconDrop from '../../Img/iconDrop.png'
import React, { useState } from 'react'
import { GameRender } from '../Game/GamesRender'
import { Teste } from './teste'


export const Search = () => {
    const [show, setShow] = useState(false)
    const [showGenre, setShowGenre] = useState(false)
    const [value, setValue] = useState('')

  const handleShow = () => {
    setShow ( !show)
  }

  const handleShowGenre = () => {
setShowGenre( !showGenre )
  }
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
setValue(e.target.value)
  }
console.log(value)
    return (
<C.Container>
<C.ContainerContent>
    <C.ContainerBarSearch>
        <C.ContainerInput placeholder='Pesquise Jogos' onChange={handleInput}/>
    </C.ContainerBarSearch>
    <C.ContainerSelectFilter >
        <C.ContainerClick onClick={handleShow}>
    <C.ContainerSelectSpanTitle>Plataforma:</C.ContainerSelectSpanTitle>
<C.ContainerSelectSpanAll>Todos</C.ContainerSelectSpanAll>
<img src={IconDrop} alt="" />
</C.ContainerClick>
    <C.ContainerContentSelectFilter>


{show &&
<nav>

    <C.Ul>
        <C.Li>Todos</C.Li>
        <C.Li>Windows</C.Li>
        <C.Li>Navegador</C.Li>
    </C.Ul>
</nav>
}

    </C.ContainerContentSelectFilter>
    </C.ContainerSelectFilter>
    <C.ContainerSelectFilterGenre>
    <C.ContainerContentSelectFilterGenre>
        <C.ContainerClick onClick={handleShowGenre}>
 <C.ContainerSelectSpanTitle>Gênero:</C.ContainerSelectSpanTitle>
<C.ContainerSelectSpanAll>Todos</C.ContainerSelectSpanAll>
<img src={IconDrop} alt="" />
</C.ContainerClick>
{showGenre &&
<nav>

    <C.UlGenre>
        <C.Li>Todos</C.Li>
        <C.Li>Mmorpg</C.Li>
        <C.Li>Shooter</C.Li>
        <C.Li>Strategy</C.Li>
        <C.Li>Racing</C.Li>
        <C.Li>Sports</C.Li>
        <C.Li>Survival</C.Li>
    </C.UlGenre>
</nav>
}

    </C.ContainerContentSelectFilterGenre>
    </C.ContainerSelectFilterGenre> 

</C.ContainerContent>

<GameRender value={value} />

</C.Container>
    )
}