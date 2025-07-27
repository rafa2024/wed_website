"use client";

import Head from 'next/head';
import { useRef } from 'react';
import { motion, rgba, useScroll, useTransform } from 'framer-motion';
import React from 'react';

export default function Home() {
  // Refs
  const sectionRefs = [
    useRef<HTMLElement>(null), // 0: Home
    useRef<HTMLElement>(null), // 1: A Nossa História
    useRef<HTMLElement>(null), // 2 
    useRef<HTMLElement>(null), // 3 
    useRef<HTMLElement>(null), // 4: Galeria
    useRef<HTMLElement>(null), // 5: Local
    useRef<HTMLElement>(null), // 6: Programa
    useRef<HTMLElement>(null), // 7: Alojamento
    useRef<HTMLElement>(null), // 8: Confirmação
  ];

  // Scroll to section function
  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Create refs for each section to detect when they're in view
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  // Scroll progress for each section with overlapping offsets
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"]
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: section4Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: scrollYProgress5 } = useScroll({ target: section5Ref, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollYProgress6 } = useScroll({ target: section6Ref, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollYProgress7 } = useScroll({ target: section7Ref, offset: ["start end", "end start"] });

  // Transform scroll progress to create seamless image transitions
  const scale1 = useTransform(scrollYProgress1, [0, 1], [1.2, 0.8]);
  
  const opacity2 = useTransform(scrollYProgress2, [0, 0.3, 0.4, 0.9, 1], [0, 0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress2, [0, 0.3, 0.4, 0.9, 1], [0.95, 0.95, 1, 1, 0.95]);
  const y2 = useTransform(scrollYProgress2, [0, 0.3, 0.4, 0.9, 1], [20, 20, 0, 0, -20]);

  // Section 3 image fades in as section 2 fades out
  const opacity3 = useTransform(scrollYProgress3, [0, 0, 0.1, 0.9, 1], [0, 0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress3, [0, 0, 0.1, 0.9, 1], [0.95, 0.95, 1, 1, 0.95]);
  const y3 = useTransform(scrollYProgress3, [0, 0, 0.1, 0.9, 1], [20, 20, 0, 0, -20]);

  // Section 4 image fades in as section 3 fades out
  const opacity4 = useTransform(scrollYProgress4, [0, 0, 0.1, 0.5, 0.6], [0, 0, 1, 1, 0]);
  const scale4 = useTransform(scrollYProgress4, [0, 0, 0.1, 0.5, 0.6], [0.95, 0.95, 1, 1, 0.95]);
  const y4 = useTransform(scrollYProgress4, [0, 0, 0.1, 0.5, 0.6], [20, 20, 0, 0, -20]);

  // Transform scroll progress to create seamless image transitions, 2nd part
  
  const opacity5 = useTransform(scrollYProgress5, [0, 0.3, 0.4, 0.9, 1], [0, 0, 1, 1, 0]);
  const scale5 = useTransform(scrollYProgress5, [0, 0.3, 0.4, 0.9, 1], [0.95, 0.95, 1, 1, 0.95]);
  const y5 = useTransform(scrollYProgress5, [0, 0.3, 0.4, 0.9, 1], [20, 20, 0, 0, -20]);

  // Section 6 image fades in as section 5 fades out  
  const opacity6 = useTransform(scrollYProgress6, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale6 = useTransform(scrollYProgress6, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const y6 = useTransform(scrollYProgress6, [0, 0.1, 0.9, 1], [20, 0, 0, -20]);

  // Section 7 image fades in as section 6   fades out
  const opacity7 = useTransform(scrollYProgress7, [0, 0.1, 0.5, 0.6], [0, 1, 1, 0]);
  const scale7 = useTransform(scrollYProgress7, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const y7 = useTransform(scrollYProgress7, [0, 0.1, 0.9, 1], [20, 0, 0, -20]);

  // Container opacity control for sections 2 to 4
  const containerOpacity = useTransform(
    [scrollYProgress2, scrollYProgress3, scrollYProgress4],
    (values: number[]) => {
      // Show container only when sections 2-4 are in view
      const [p2, p3, p4] = values;
      // Only show when any section is between 0.1 and 0.9 progress (more precise)
      if ((p2 >= 0 && p2 <= 1) || (p3 >= 0 && p3 <= 1) || (p4 >= 0 && p4 <= 1)) return 1;
      return 0;
    }
  );

  // Container opacity control for sections 5 to 7
  const containerOpacity2 = useTransform(
    [scrollYProgress5, scrollYProgress6, scrollYProgress7],
    (values: number[]) => {
      // Show container only when sections 5-7 are in view
      const [p5, p6, p7] = values;
      // Only show when any section is between 0.1 and 0.9 progress (more precise)
      if ((p5 >= 0 && p5 <= 1) || (p6 >= 0 && p6 <= 1) || (p7 >= 0 && p7 <= 1)) return 1;
      return 0;
    }
  );

 
  // Section 2 background image zoom effect
  const section2BgScale = useTransform(scrollYProgress2, [0, 1], [0.3, 0.7]);
  const section2BgTransform = useTransform(section2BgScale, (scale) => `scale(${scale})`);
  // Section 3 background image zoom effect
  const section3BgScale = useTransform(scrollYProgress3, [0, 1], [0.4, 0.8]);
  const section3BgTransform = useTransform(section3BgScale, (scale) => `scale(${scale})`);
  // Section 4 background image zoom effect
  const section4BgScale = useTransform(scrollYProgress4, [0, 1], [0.2, 0.7]);
  const section4BgTransform = useTransform(section4BgScale, (scale) => `scale(${scale})`);

  const section5BgScale = useTransform(scrollYProgress5, [0, 1], [0.3, 0.7]);
  const section5BgTransform = useTransform(section5BgScale, (scale) => `scale(${scale})`);
  // Section 3 background image zoom effect
  const section6BgScale = useTransform(scrollYProgress6, [0, 1], [0.4, 0.8]);
  const section6BgTransform = useTransform(section6BgScale, (scale) => `scale(${scale})`);
  // Section 4 background image zoom effect
  const section7BgScale = useTransform(scrollYProgress7, [0, 1], [0.2, 0.7]);
  const section7BgTransform = useTransform(section7BgScale, (scale) => `scale(${scale})`);

  // Add carousel images array at the top of the Home component
  const carouselImages = [
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/barcelona.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paris.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/ilha.JPG',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/paredes.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/lamego.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/gibraltar.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/polonia.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/granada.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/turquia.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/disney.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/cuba.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/milao.jpg',
    'https://raw.githubusercontent.com/rafa2024/wed_website/main/image/como.jpg',


  ];
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const handlePrev = () => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const handleNext = () => setCarouselIndex((prev) => (prev + 1) % carouselImages.length);

  return (
    <>
      <Head>
        <title>My Website with 6 Sections</title>
        <meta name="description" content="Website with 6 sections" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600;900&family=Kenia:wght@400&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation Bar */}
      <header style={navStyle}>
        <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => scrollToSection(0)}
            style={navHomeButtonStyle}
          >
            <img
              src="https://raw.githubusercontent.com/rafa2024/wed_website/main/image/Logo.png"
              alt="Logo"
              style={{ height: 40, verticalAlign: 'middle', display: 'block' }}
            />
          </button>
          <button
            onClick={() => scrollToSection(1)}
            style={navButtonStyle}
          >
            A Nossa História
          </button>
          <button
            onClick={() => scrollToSection(4)}
            style={navButtonStyle}
          >
            Galeria
          </button>
          <button
            onClick={() => scrollToSection(5)}
            style={navButtonStyle}
          >
            Local
          </button>
          <button
            onClick={() => scrollToSection(6)}
            style={navButtonStyle}
          >
            Programa
          </button>
          <button
            onClick={() => scrollToSection(7)}
            style={navButtonStyle}
          >
            Alojamento
          </button>
          <button
            onClick={() => scrollToSection(8)}
            style={navButtonStyle}
          >
            Confirmação
          </button>
          <button
            onClick={() => scrollToSection(9)}
            style={navButtonStyle}
          >
            Contactos
          </button>
        </nav>
      </header>

      {/* Add Montserrat font globally */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        html, body {
          font-family: 'Montserrat', Arial, Helvetica, sans-serif !important;
        }
        * {
          font-family: 'Montserrat', Arial, Helvetica, sans-serif !important;
        }
      `}</style>

      <main style={{ display: 'flex', flexDirection: 'column', marginTop: '70px' }}>
        {/* Section 1 - Home*/}
        <motion.section 
          ref={sectionRefs[0]}
          style={{ 
            height: '100vh', 
            width: '100%',
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 240, 0.8)'
          }}
        >
         
          <motion.div
            ref={section1Ref}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/irlanda.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: scale1,
              zIndex: 2,
              transformOrigin: 'center center'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            zIndex: 3
          }} />
          
          <div style={{
            position: 'relative',
            zIndex: 4,
            textAlign: 'right',
            color: 'white',
            padding: '4rem',
            maxWidth: '800px',
            marginLeft: '10%'
          }}>
            <h1 style={{
              fontSize: '6rem',
              fontWeight: '500',
              marginBottom: '1.5rem',
              textShadow: '6px 6px 8px rgba(0,0,0,0.5)',
              lineHeight: '1.2'
            }}>
              Rita & Rafael
            </h1>
            <p style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              maxWidth: '600px',
              color: '#014421' // dark green
            }}>
              04.10.2026  
            </p>
          </div>
        </motion.section>

        {/* Fixed image container - only visible during sections 2-4 */}
        <motion.div 
          style={{
            position: 'fixed',
            top: '20vh',
            left: '2rem',
            width: '50%',
            height: '70vh',
            zIndex: 100,
            pointerEvents: 'none',
            opacity: containerOpacity
          }}
        >
          {/* All three images stacked in the same position, section 2-4 */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/baile.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              borderRadius: '8px',
              opacity: opacity2
            }}
          />
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/cortejo.JPG)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top 20%',
              borderRadius: '8px',
              opacity: opacity3
            }}
          />
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/pedido.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              opacity: opacity4
            }}
          />
        </motion.div>
        
        {/* Fixed image container - only visible during sections 5-7 */}
        <motion.div 
          style={{
            position: 'fixed',
            top: '20vh',
            right: '2rem',
            width: '50%',
            height: '70vh',
            zIndex: 101,
            pointerEvents: 'none',
            opacity: containerOpacity2
          }}
        >
          {/* All three images stacked in the same position, section 5-7*/}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/quinta1.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              borderRadius: '8px',
              opacity: opacity5
            }}
          />
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/quinta4.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center top 20%',
              borderRadius: '8px',
              opacity: opacity6
            }}
          />
          <motion.div 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/quinta3.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              opacity: opacity7
            }}
          />
        </motion.div>

        {/* Sections 2-4 with continuous gradient */}
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Section 2 - A Nossa História*/}
          <section 
            ref={sectionRefs[1]}
            style={{ 
              display: 'flex', 
              minHeight: '100vh', 
              width: '100%',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 240, 0.8)'
            }}
          >
            {/* Empty div to take up left space where image would be */}
            <div style={{ width: '55%' }} />
            {/* Add the ref here */}
            <div ref={section2Ref} style={{ width: '45%', padding: '2rem', position: 'relative' }}>
              {/* Background image with zoom effect above gradient */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-150%',
                  left: '-50%',
                  width: '170%',
                  height: '500%',
                  backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  zIndex: 1,
                  pointerEvents: 'none',
                  transform: section2BgTransform
                }}
              />
              {/* Text content on top */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={sectionTitleStyle}>A Nossa História</h2>
                <div style={sectionTextStyle}>
                  <p> Desde a escola EB23 do Viso, onde nem sempre fomos os melhores amigos, até entrarmos juntos no baile de finalistas do secundário.</p> 
                  <p> O nosso percurso como parceiros já tem uma duração respeitável, no nosso caso, dizer que crescemos juntos, é literal.</p>
                  <p> Era impossível sermos os mesmos, tinhamos 12 anos na primeira vez em que nos vimos, já levamos 3 décadas, juntos metade desse tempo.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3*/}
          <section 
            ref={sectionRefs[2]}
            style={{ 
              display: 'flex', 
              minHeight: '100vh', 
              width: '100%',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 240, 0.8)'
            }}
          >
            {/* Empty div to take up left space where image would be */}
            <div style={{ width: '55%' }} />
            {/* Add the ref here */}
            <div ref={section3Ref} style={{ width: '45%', padding: '2rem', position: 'relative' }}>
              {/* Background image with zoom effect, aligned right */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-150%',
                  right: '40%',
                  width: '140%',
                  height: '500%',
                  backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'left',
                  zIndex: 1,
                  pointerEvents: 'none',
                  transform: section3BgTransform
                }}
              />
              {/* Text content on top */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={sectionTextStyle}>
                  <p> Completámos vários objetivos em conjunto, quer fossem individuais ou comuns, e ultrapássamos várias metas.</p> 
                  <p> Partilhámos estadia em diferentes locais ao redor do mundo, uns mais citadinos, outros mais exóticos.</p>
                  <p> Mas este percurso não foi totalmente feito a dois, os familiares e amigos que nos acompanharam enriquecem esta história.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4*/}
          <section 
            ref={sectionRefs[3]}
            style={{ 
              display: 'flex', 
              minHeight: '100vh', 
              width: '100%',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 240, 0.8)'
            }}
          >
            {/* Empty div to take up left space where image would be */}
            <div style={{ width: '55%' }} />
            {/* Add the ref here */}
            <div ref={section4Ref} style={{ width: '45%', padding: '2rem', position: 'relative' }}>
              {/* Background image with zoom effect, aligned center */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-400%',
                  left: '-35%',
                  width: '150%',
                  height: '900%',
                  backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 1,
                  pointerEvents: 'none',
                  transform: section4BgTransform
                }}
              />
              {/* Text content on top */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={sectionTextStyle}>
                  <p> Agora decidimos avançar para uma nova fase</p> 
                  <p> Queremos contar com a tua presença para este momento especial.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*Image Carousel Section - Galeria */}
        <section
          ref={sectionRefs[4]}
          style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 240, 0.8)',
            position: 'relative',
            margin: 0,
            padding: 0,
          }}
        >
          <h2 style={{ ...sectionTitleStyle, marginBottom: '2rem' }}>Galeria</h2>
          <Carousel
            images={carouselImages}
            currentIndex={carouselIndex}
            setCurrentIndex={setCarouselIndex}
          />
        </section>

        {/* Section 5 – Local */}

          <section ref={sectionRefs[5]} style={{ display: 'flex', minHeight: '100vh', alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 240, 0.8)'
          }}>
              <div ref={section5Ref} style={{ width: '45%', padding: '2rem', position: 'relative', zIndex:2}}>
              <motion.div
                  style={{
                    position: 'absolute',
                    top: '-150%',
                    left: '-50%',
                    width: '170%',
                    height: '500%',
                    backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    zIndex: -1,
                    pointerEvents: 'none',
                    transform: section5BgTransform
                  }}
                />
              {/* Text content on top */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={sectionTitleStyle}>Local</h2>
              <div style={sectionTextStyle}>
                <p>Quinta da Eira - Bustelo, Penafiel, 4560-042 Penafiel</p>
                <a
                  href="https://www.google.com/maps/dir//Bustelo,+Penafiel,+4560-042+Penafiel/@41.2288806,-8.3534428,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd24922953b4adb1:0xc52a640d774923ae!2m2!1d-8.271042!2d41.22891?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#014421', fontWeight: 600, fontSize: '1.1em', textDecoration: 'underline', display: 'inline-block', marginTop: '0.7rem' }}
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            </div>
            <div style={{ width: '55%' }} /> {/* Empty space for fixed image */}
          </section>

        {/* Section 6 – Programa */}
        <section ref={sectionRefs[6]} style={{ display: 'flex', minHeight: '100vh', alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 240, 0.8)'
        }}>
          <div ref={section6Ref} style={{ width: '45%', padding: '2rem', position: 'relative', zIndex: 2 }}>
            <motion.div
              style={{
                position: 'absolute',
                top: '-100%',
                left: '0%',
                width: '170%',
                height: '300%',
                backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'right',
                zIndex: -1,
                pointerEvents: 'none',
                transform: section6BgTransform
              }}
            />
            {/* Text content on top */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={sectionTitleStyle}>Programa</h2>
            <div style={{ ...sectionTextStyle, fontFamily: 'monospace', marginTop: '2rem' }}>
                {[
                  { time: '3:30 PM', event: 'RECEÇÃO DOS CONVIDADOS' },
                  { time: '4:00 PM', event: 'CERIMÓNIA' },
                  { time: '5:00 PM', event: 'COCKTAIL' },
                  { time: '7:00 PM', event: 'JANTAR' },
                  { time: '10:00 PM', event: 'PARTY' },
                ].map(({ time, event }, index, arr) => (
                  <div key={index} style={{ borderBottom: '1px solid #4a4a2d', padding: '1rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ letterSpacing: '0.1em' }}>{time}</span>
                    <span style={{ letterSpacing: '0.15em' }}>{event}</span>
                  </div>
                  ))}
              </div>
            </div>
          </div>
          <div style={{ width: '55%' }} />
        </section>

          {/* Section 7 – Alojamento */}
          <section ref={sectionRefs[7]} style={{ display: 'flex', minHeight: '100vh', alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 240, 0.8)'
          }}>
            <div ref={section7Ref} style={{ width: '45%', padding: '2rem', position: 'relative', zIndex: 2 }}>
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-220%',
                  left: '-50%',
                  width: '200%',
                  height: '500%',
                  backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/mancha.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  zIndex: -1,
                  pointerEvents: 'none',
                  transform: section7BgTransform
                }}
              />
              {/* Text content on top */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={sectionTitleStyle}>Alojamento</h2>
              <div style={sectionTextStyle}>
                <p><span style={{ fontWeight: 'bold' }}>1ª opção</span> - Quarto na quinta - 150€ para 2 pessoas </p>
                <p><span style={{ fontWeight: 'bold' }}>2ª opção</span> - Cama em camarata na quinta - 20€ por pessoa </p>
                <p>*Pequeno almoço incluído no dia seguinte</p>
              </div>
              <div style={{ ...sectionTextStyle, marginTop: '2.5rem' }}>
                <p><span style={{ fontWeight: 'bold' }}>Nota:</span> </p>
                <p>Quem pretender alojamento, comunicar com a maior brevidade possível</p>
              </div>
            </div>
            </div>
            <div style={{ width: '55%' }} />
          </section>


        {/* Section 8 - Confirmação */}
        <section 
          ref={sectionRefs[8]}
          style={{ 
            minHeight: '100vh', 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4rem',
            background: 'linear-gradient(135deg, rgba(0, 20, 0, 0.9) 0%, rgba(0, 40, 0, 0.95) 50%, rgba(0, 20, 0, 0.9) 100%)',
            color: 'white'
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h2 style={{ ...sectionTitleStyle, color: 'white' }}>Confirma a tua presença</h2>
            <p style={{ ...sectionTextStyle, color: '#e0e0e0' }}>
            <a
                  href="https://form.typeform.com/to/EUMcgia3"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#e0e0e0', fontWeight: 600, fontSize: '1.1em', textDecoration: 'underline', display: 'inline-block', marginTop: '0.7rem' }}
                >
                  Aqui
                </a>
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section 
          ref={sectionRefs[9]}
          style={{ 
            height: '100vh', 
            width: '100%',
            backgroundImage: 'url(https://raw.githubusercontent.com/rafa2024/wed_website/main/image/guiness.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div style={{
            position: 'absolute',
            bottom: '5%',
            left: '10%',
            right: '10%',
            textAlign: 'right',
            color: 'white',
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              Vem brindar connosco!
            </h2>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Queremos que faças parte do nosso dia
            </p>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              marginTop: '2.5rem'
            }}>
                  <p> Contactos: </p> 
                  <p> Rita    +351 967 097 870</p>
                  <p> Rafael  +351 965 084 906</p>
            </div>

          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)'
          }} />
        </section>
      </main>
    </>
  );
}

// Style objects for reusability
const navStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  background: `
    linear-gradient(135deg, 
      rgba(255, 255, 240, 0.90) 0%, 
      rgba(245, 245, 220, 0.85) 15%, 
      rgba(0, 60, 0, 0.88) 35%, 
      rgba(0, 40, 0, 0.92) 50%, 
      rgba(0, 60, 0, 0.88) 65%, 
      rgba(245, 245, 220, 0.85) 85%, 
      rgba(255, 255, 240, 0.90) 100%
    ),
    radial-gradient(circle at 20% 50%, rgba(0, 40, 0, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 60, 0, 0.2) 0%, transparent 50%)
  `,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 100,
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  backdropFilter: 'blur(8px)',
};

const navButtonStyle: React.CSSProperties = {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '1.3rem',
  fontWeight: 800,
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  transition: 'all 0.2s',
  color: '#fff',
  fontFamily: 'Kenia, Inter, Segoe UI, Arial, sans-serif',
  opacity: 0.85,
};

const navHomeButtonStyle: React.CSSProperties = {
  ...navButtonStyle,
  fontSize: '1.4rem',
  fontWeight: 600,
  letterSpacing: '0.03em',
  opacity: 1,
};

const sectionTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1.5rem',
  color: '#333'
};

const sectionTextStyle = {
  fontSize: '1.4rem',
  lineHeight: '1.4',
  fontWeight: '500',
  color: '#222'
};

// Carousel component
type CarouselProps = {
  images: string[];
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};
function Carousel({ images, currentIndex, setCurrentIndex }: CarouselProps) {
  // Autoplay
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev: number) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, setCurrentIndex]);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div style={{ position: 'relative', width: '60vw', maxWidth: 600, height: 350, overflow: 'visible', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '4rem' }}>
      {/* Previous image (left, no tilt) */}
      <motion.img
        key={images[prevIndex] + '-prev'}
        src={images[prevIndex]}
        alt="Previous"
        initial={{ opacity: 0, x: -80, scale: 0.8 }}
        animate={{ opacity: 0.7, x: -120, scale: 0.8 }}
        exit={{ opacity: 0, x: -80, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '105%',
          objectFit: 'cover',
          borderRadius: 16,
          zIndex: 1,
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          pointerEvents: 'none',
        }}
      />
      {/* Main image (center) */}
      <motion.img
        key={images[currentIndex] + '-main'}
        src={images[currentIndex]}
        alt={`Gallery image ${currentIndex + 1}`}
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -50, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '140%',
          height: '120%',
          objectFit: 'cover',
          borderRadius: 16,
          zIndex: 2,
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        }}
      />
      {/* Next image (right, no tilt) */}
      <motion.img
        key={images[nextIndex] + '-next'}
        src={images[nextIndex]}
        alt="Next"
        initial={{ opacity: 0, x: 80, scale: 0.8 }}
        animate={{ opacity: 0.7, x: 120, scale: 0.8 }}
        exit={{ opacity: 0, x: 80, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '80%',
          height: '95%',
          objectFit: 'cover',
          borderRadius: 16,
          zIndex: 1,
          boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
          pointerEvents: 'none',
        }}
      />
      {/* Left arrow */}
      <button
        onClick={() => setCurrentIndex((prev: number) => (prev - 1 + images.length) % images.length)}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: 'pointer',
          zIndex: 3,
        }}
        aria-label="Previous image"
      >
        &#8592;
      </button>
      {/* Right arrow */}
      <button
        onClick={() => setCurrentIndex((prev: number) => (prev + 1) % images.length)}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 24,
          cursor: 'pointer',
          zIndex: 3,
        }}
        aria-label="Next image"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div style={{ display: 'flex', gap: 8, position: 'absolute', bottom: -32, left: '50%', transform: 'translateX(-50%)' }}>
        {images.map((_: string, idx: number) => (
          <div
            key={idx}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: idx === currentIndex ? '#014421' : '#bbb',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}