import React from 'react';
import { FaPinterest, FaInstagram, FaDribbble } from 'react-icons/fa'
import { FooterWrapper } from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <h1>OnlyWoman</h1>
      <div>
        <FaPinterest size={30} />
        <FaInstagram size={30} />
        <FaDribbble size={30} />
      </div>
      <strong>Criado por <a href="https://prodbase.com.br">ProdBase</a></strong>
    </FooterWrapper>
  )
}

export default Footer;