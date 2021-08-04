import React from 'react';
import HomeBlockFive from '../components/Home/HomeBlockFive/HomeBlockFive';
import HomeBlockFour from '../components/Home/HomeBlockFour/HomeBlockFour';
import HomeBlockOne from '../components/Home/HomeBlockOne/HomeBlockOne';
import HomeBlockThree from '../components/Home/HomeBlockThree/HomeBlockThree';
import HomeBlockTwo from '../components/Home/HomeBlockTwo/HomeBlockTwo';
import SeoComponent from '../components/SeoComponent/SeoComponent';

const Home: React.FC = () => {
  return (
    <main>
      <SeoComponent
        title="OnlyWoman"
        desc="Conheça mais um template da prodbase feito para te inspirar!!"
        keywords="Prodbase Criação de Websites, Blogs, Portfólio, Galeria de fotos e Site institucional"
        url="https://onlywoman.prodbase.com.br/"
      />
      <HomeBlockOne />
      <HomeBlockTwo />
      <HomeBlockThree />
      <HomeBlockFour />
      <HomeBlockFive />
    </main>
  )
}

export default Home;