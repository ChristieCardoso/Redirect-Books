import React from 'react';
import Image from 'next/image';
import fe1 from '../public/assets/f1.png';
import fe2 from '../public/assets/f2.png';
import fe3 from '../public/assets/f3.png';
import fe4 from '../public/assets/f4.png';

const Features = () => {
  return (
    <div className="features">
      <div className="fe-box">
        <Image src={fe1} alt="features-1" className="fe-img" />
        <h6>Compra Online</h6>
      </div>
      <div className="fe-box">
        <Image src={fe2} alt="features-2" className="fe-img" />
        <h6>Direto da Amazon</h6>
      </div>
      <div className="fe-box">
        <Image src={fe3} alt="features-3" className="fe-img" />
        <h6>Economize Dinheiro</h6>
      </div>
      <div className="fe-box">
        <Image src={fe4} alt="features-4" className="fe-img" />
        <h6>Promoções Especiais</h6>
      </div>
    </div>
  );
};

export default Features;