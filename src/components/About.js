import React from 'react';

// import img
import Image from '../assets/img/nosotros.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Sobre nosotros
              </h2>
              <p className='mb-4 text-gray-300'>
              Ofrecemos una amplia gama de servicios
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
               Asegurando calidad en construcción y mantenimiento de obras civiles y mecánicas, fabricación y soldadura, mantenimiento de equipos estáticos y rotativos, tendido y reparación de líneas costa afuera y costa adentro, revestimiento de tuberías. 
               <br />
               <br />
               limpieza interna de tuberías y de equipos, buceo industrial, transporte acuático de carga y personal, transporte acuático de desechos, transporte terrestre de carga y personal, transporte terrestre de desechos, servicio de comidas empacadas y servidas en línea.
              </p>
            </div>
            <a href='#contact' className='btn btn-md bg-red-800 hover:bg-red-900 md:btn-lg transition-all'>
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
