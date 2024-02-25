import React from 'react';
import Link from 'next/link';
import herobtn from '../public/assets/button.png';
import hero from '../public/assets/hero4.png';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${hero.src})` }}>
      <h1>
        Ofertas Imperdíveis
        <br /> <span style={{ color: '#088178' }}>Em Todos os Livros</span>
      </h1>
      <span>descontos em até 70%</span>
      <Link href="/shop">
        <button style={{ backgroundImage: `url(${herobtn.src})` }}>Compre Agora</button>
      </Link>
    </div>
  );
};

export default Hero;
