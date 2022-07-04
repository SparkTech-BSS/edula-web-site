import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import ServiceView from '../components/ServiceView'
import TeachSection from '../components/TeachSection'
import Footer from '../components/Footer'

import { motion } from 'framer-motion'

import { Wrapper } from '../styles/global'

const Home: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="author" content="Baziota Beans" />
        <meta name="description" content="Edula Official Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }}
      >
        <Header />
        <About />
        <ServiceView />
        <TeachSection />
        <Footer />
      </motion.main>
    </>
  )
}

export default Home
