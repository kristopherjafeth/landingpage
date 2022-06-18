import React, { useEffect, useState } from 'react';

// import components
import Image from '../assets/img/mision.jpg';

const Testimonials = () => {

  return (
    <section className='section bg-secondary' id='mision'>
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
              Nuestra misión

              </h2>
              <p className='mb-4 text-gray-300'>
              Ofrecemos una amplia gama de servicios
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              Somos una empresa dedicada al área industrial y petrolera con un enfoque basado en la calidad; contamos con más de 20 años de experiencia en ejecución de obras y servicios en el área de construcción, mantenimiento y transporte en el Lago de Maracaibo, estamos comprometidos en alcanzar la satisfacción de nuestros clientes, contamos con un equipo humano altamente calificado que vela por la optima ejecución de cada uno de nuestros proyectos.


              </p>
            </div>
            <a href="https://solicitudes.consorcioconstrutecz.com/empleo" className='btn btn-md bg-red-800 hover:bg-red-900 md:btn-lg transition-all'>
              Solicitud de Empleo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
