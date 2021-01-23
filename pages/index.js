import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from "next/Image";
 import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion"

export default function Home() {
  const [etape, setEtape] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [musicienTotal, setMusicienTotal] = useState(1);
  const [entreprisesTotal, setEntreprisesTotal] = useState(1);

  useEffect(() => {
    const d = new Date();
    const dayNumber = d.getDate();
    let musicienTotal = 3;
    let entreprisesTotal = 7;
    
    musicienTotal = musicienTotal + dayNumber;
    entreprisesTotal = entreprisesTotal + dayNumber;

    setMusicienTotal(musicienTotal);
    setEntreprisesTotal(entreprisesTotal);
  })

  const handleChangeStep = (step) => {
    setEtape(step);
  }

  const handleShowPopUp = () => {
    setPopUp(!popUp);
  }

  return (
    <>
      <Head>
        <title>Succal - Le Futur du web au service des entreprises locales</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero is-black is-fullheight background">
        <div className="hero-head p-5 hoverlay-black">
          <header className="navbar is-transparent">
            <div className="container">
              <div className="navbar-brand centered-brand">
                <a className="navbar-item">
                  <Image src="/logo.png"
                    alt="Succal"
                    width={300}
                    height={94}
                    layout="intrinsic" />
                </a>
              </div>
               </div>
          </header>
        </div>

        <div className="hero-body hoverlay-black">
          <motion.div
            className="container has-text-centered"
            initial="pageDebut"
            animate="pageAnimate"
            variants={{
              pageDebut: {
                opacity: 0,
                y: -25,
              },
              pageAnimate: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >
            <h1 className="title">
              Le futur du site internet est là
            </h1>
            <h2 className="subtitle">
              Optimisé pour votre succès
            </h2>

            
            <article className="m-6">
              {/* Etape 0 */}
              {etape === 0 ? (<div className="columns">
                <div className="column">
                  <button onClick={() => handleChangeStep(1)} className="button is-large  is-primary">Je réponds à quelques questions</button>
                  <p className="mt-2">Pour mieux être orienter</p>
                </div>
              </div>) : null}

              {/* Etape 1 - Choix Identité */}
              {etape === 1 ? (<div className="columns is-multiline">
                <motion.div
                  initial={{ y: -1800 }}
                  animate={{ y: 0 }} className="column is-12">
                  <h2>Qui êtes-vous ?</h2>
                </motion.div>
                <div className="column">
                  <button onClick={() => handleChangeStep(2)} className="button is-large  is-primary">Un entrepreneur</button>
                </div>
                <div className="column">
                  <button onClick={() => handleChangeStep(3)} className="button is-large  is-primary">Un musicien</button>
                </div>
              </div>) : null}

              {/* Etape 2 - Entrepreneur */}
              {etape === 2 ? (<div className="columns is-multiline">
                <motion.div
                  initial={{ y: -1800 }}
                  animate={{ y: 0 }} className="column is-12">
                  <h2>On peut vous créer un site qui vende vraiment</h2>
                </motion.div>
                <div className="column">
                  <button onClick={() => handleShowPopUp()} className="button is-large  is-light ">Prendre rendez-vous</button>
                  <p className="mt-2">15min de consultation gratuite</p>
                </div>
                <div className="column">
                  <a href="#"><button className="button is-large  is-primary">Commander</button></a>
                  <p className="mt-2">Pour entrer dans la liste d'attente <br />({entreprisesTotal} entreprises devant vous)</p>
                </div>
              </div>) : null}

              {/* Etape 3 - Musicien */}
              {etape === 3 ? (<div className="columns is-multiline">
                <motion.div
                  initial={{ opacity: 0, y: -2800 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 2800 }} className="column is-12">
                  <h2>On peut vous faire percer</h2>
                </motion.div>
                <div className="column">
                  <button onClick={() => handleShowPopUp()} className="button is-large  is-light ">Prendre rendez-vous</button>
                  <p className="mt-2">15min de consultation gratuite</p>
                </div>
                <div className="column">
                  <a href="#"><button className="button is-large  is-primary">Commander</button></a>
                  <p className="mt-2">Pour entrer dans la liste d'attente <br />({musicienTotal} musiciens/rappeurs devant vous)</p>
                </div>
              </div>) : null}
              
            </article>
          </motion.div>
        </div>

        <div className="hero-foot hoverlay-black">
          <div className="columns p-5 is-vcentered is-centered">
          <div className="column has-text-centered">
            <div className="is-flex is-align-content-center is-justify-content-center">
              <FontAwesomeIcon color="white" className="icon is-medium is-flex mr-2 is-align-content-center is-justify-content-center" icon={["fas", "database"]} /> 
              <span className="mt-1 is-flex is-align-content-center is-justify-content-center ">Hébergement gratuit</span>
            </div>
          </div>
          <div className="column has-text-centered">
           <div className="is-flex is-align-content-center is-justify-content-center">
              <FontAwesomeIcon color="white" className="icon is-medium is-flex mr-2 is-align-content-center is-justify-content-center" icon={["fas", "tachometer-alt"]} /> 
              <span className="mt-1 is-flex is-align-content-center is-justify-content-center ">Très rapide</span>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="is-flex is-align-content-center is-justify-content-center">
              <FontAwesomeIcon color="white" className="icon is-medium is-flex mr-2 is-align-content-center is-justify-content-center" icon={["fas", "tree"]} /> 
              <span className="mt-1 is-flex is-align-content-center is-justify-content-center ">Ecologique</span>
            </div>
          </div>
          </div>
        </div>
      </section>

     {popUp ? (<div className="modal is-active">
  <div onClick={() => handleShowPopUp()} className="modal-background"></div>
  <div className="modal-content">
    <figure className="box">
      <h2 className="has-text-centered">Prenons 15 minutes ensemble</h2>
       <InlineWidget url="https://calendly.com/succal/15min" /> 
    </figure>
  </div>
  <button onClick={() => handleShowPopUp()} className="modal-close is-large" aria-label="close"></button>
</div>) : null}
    </>
  )
}
