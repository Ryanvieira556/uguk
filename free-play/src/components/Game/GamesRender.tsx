import * as C from "./styles";
import IconWindows from "../../Img/iconWindows.png";
import IconBrowser from "../../Img/iconBrowser.png";
import { useEffect, useState } from "react";
import { dataGames } from "../../data/api";
import { TypeGame } from "../types/typeGame";

export const GameRender = ({value}: any) => {
  const [state, setState] = useState<TypeGame[]>([]);
  const [data, setData] = useState<TypeGame[]>([])

  useEffect(() => {
    renderGame();
if(!value){
    setData(state)
    return;
}
    const filterData = state.filter((item) => item.title.toLowerCase().includes(value))

setData(filterData)

  },[state,value]);

  const renderGame = async () => {
    const json = await dataGames;
    return setState(json);
  };
  function WhatThisPlataform(platform: string) {
    if (platform === "PC (Windows)") {
      return IconWindows;
    } else {
      return IconBrowser;
    }
  }
  return (
    <C.Container>
      <C.ContainerContent>
        {data.map((item, index) => (
          <div key={index}>
            <C.ContainerLink href={item.game_url} target="_blank" rel="noopener noreferrer">
            <C.ContainerCard>
              <C.ContainerCardImg src={item.thumbnail} />
              <C.ContainerCardTitle>{item.title}</C.ContainerCardTitle>
              <C.ContainerCardDesc>
                {item.short_description.substring(0, 55)}
              </C.ContainerCardDesc>
              <C.ContainerCardGenre>
                <C.ContainerCardGenreSpan>
                  {item.genre}
                </C.ContainerCardGenreSpan>
                <C.ContainerCardGenreImg
                  src={WhatThisPlataform(item.platform)}
                />
              </C.ContainerCardGenre>
            </C.ContainerCard>
            </C.ContainerLink>
          </div>
        ))}
      </C.ContainerContent>
    </C.Container>
  );
};
