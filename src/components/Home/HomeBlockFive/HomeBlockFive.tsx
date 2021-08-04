import React from 'react';

import { HomeBlockFiveWrapper } from './HomeBlockFiveStyles';

const HomeBlockFive: React.FC = () => {
  return (
    <HomeBlockFiveWrapper id="contact">
      <h1>Entre em contato conosco</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, sequi?</p>
      <div>
        <label htmlFor="">Nome</label>
        <input type="text" placeholder="Informe seu nome" />
        <label htmlFor="">E-mail</label>
        <input type="text" placeholder="Informe seu nome" />
        <label htmlFor="">Por que deseja se juntar a nós?</label>
        <textarea placeholder="Informe seu nome" />
        <button>Quero Participar</button>
      </div>
    </HomeBlockFiveWrapper>
  )
}

export default HomeBlockFive;