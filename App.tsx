import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './components/GlobalStyles';
import Intro from './components/Intro';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AISection from './components/AISection';
import SkillsAndInterests from './components/SkillsAndInterests';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="antialiased selection:bg-accent selection:text-paper">
      <GlobalStyles />
      <CustomCursor />
      <div className="paper-texture" />
      
      <AnimatePresence>
        {!introFinished && (
          <Intro onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative"
      >
        <Hero />
        <AboutMe />
        <AISection />
        <SkillsAndInterests />
        <Footer />
      </motion.main>
    </div>
  );
}