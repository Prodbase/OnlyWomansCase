import React from 'react';
import Image from 'next/image';
import { HomeBlockOneWrapper, TextsWrapper } from './HomeBlockOneStyles';
import Header from '../../Header/Header';

const HomeBlockOne: React.FC = () => {
  return (
    <HomeBlockOneWrapper id="home">
      <Header />
      <div>
        <Image priority src="https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" quality={70} layout="fill" alt="home-background" />
      </div>
      <div>
        <Image priority src="https://images.pexels.com/photos/6973960/pexels-photo-6973960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" quality={70} layout="fill" alt="home-background" />
      </div>
      <div>
        <Image priority src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" quality={70} layout="fill" alt="home-background" />
      </div>
      <div>
        <Image priority src="https://images.pexels.com/photos/6254024/pexels-photo-6254024.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" quality={70} layout="fill" alt="home-background" />
      </div>
      <TextsWrapper>
        <h1>Venha descobrir a força de toda mulher moderna</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa animi fugiat nesciunt debitis, dolorem eaque illo ducimus.</p>
        <button>Saber mais</button>
      </TextsWrapper>
    </HomeBlockOneWrapper>
  )
};

export default HomeBlockOne;
