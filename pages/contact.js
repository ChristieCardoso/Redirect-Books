import React from "react";
import Image from "next/image";
import people1 from "../public/assets/1.png";
import people2 from "../public/assets/2.png";

import banner from '../public/assets/banner.png';
import { MdLocationOn, MdEmail, MdLocalPhone, MdWatchLater } from "react-icons/md";

const Contact = () => {
  return (
    <div >
      <Image src={banner} alt="banner" />
      <div className="contact-details">
        <div className="details">
          <h2>Visite a localização de um dos nossos centros de destribuição ou entre em contato conosco hoje mesmo.</h2>
          <div>
            <div className="ic">
              <MdLocationOn className="icon" />
              <p>562 Ojota Road, street 23, Lagos</p>
            </div>

            <div className="ic">
              <MdEmail className="icon" />
              <p>sample@email.com</p>
            </div>
            <div className="ic">
              <MdLocalPhone className="icon" />
              <p>+2348034847764 / +2349037464636</p>
            </div>
            <div className="ic">
              <MdWatchLater className="icon" />
              <p>Monday to Saturday 9am - 18:00</p>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4833955742415!2d3.412033349702867!3d6.460274295303441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3602f67e5f%3A0xc383098fd15fe567!2sOsborne%20Rd%2C%20Dolphine%20Estate%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1661621908310!5m2!1sen!2sng" title="Location" ></iframe>
        </div>
      </div>

      <div className="form-details">
        <form>
          <h3 className="form-title">Deixe um recado</h3>
          <input type="text" placeholder="digite seu nome" />
          <input type="email" placeholder="digite seu email" />
          <input type="text" placeholder="assunto" />
          <textarea placeholder="sua mensagem"></textarea>
          <button className="btn-sub">Enviar</button>
        </form>

        <div className="people">
          <div>
            <Image src={people1} alt="people1" />
            <p><span>Ojo Akpan</span>Senior Marketing manager <br /> Telefone: +23480386453 <br /> email: sampleemail@mail.com </p>
          </div>
          <div>
            <Image src={people2} alt="people2" />
            <p><span>Kola Daniel</span> Sales Representative<br /> Telefone: +23480874553 <br /> email: sampleemail@mail.com </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact