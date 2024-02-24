import React from 'react';
import Image from 'next/image';
import about from '../public/assets/about.png';
import banner from '../public/assets/banner -about.png';


const About = () => {
  return (
    <>
      <Image src={banner} alt="banner" />

      <div className='about-head'>
        <Image src={about} alt="about us" width={2000} height={1500} />
        <div>
          <h2>Quem nós somos?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sapiente vel accusamus a soluta. Enim quam nobis in explicabo id dolor dolorum sit, distinctio, qui ab, aut similique. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ipsa aut soluta fuga molestiae porro nostrum vitae facilis assumenda ipsam! Aspernatur at deleniti et vel distinctio eos temporibus sint voluptatum</p>

          <br /><br />
          <marquee bgcolor="#ccc" scrolldelay="100" scrollamount="5" width="100%">Leitura é a viagem mais enriquecedora que podemos empreender, onde cada página nos leva a novos horizontes de conhecimento e imaginação.</marquee>
        </div>
      </div>
    </>
  )
}

export default About