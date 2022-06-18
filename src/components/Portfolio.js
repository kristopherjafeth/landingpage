import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='servicios' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            Nuestros Servicios
          </h2>
          <p className='subtitle'>
          Estamos comprometidos a superar las expectativas de nuestros clientes, garantizando la entrega oportuna de nuestros proyectos y manteniendo la calidad que respalda el nombre de nuestra organización.


          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
