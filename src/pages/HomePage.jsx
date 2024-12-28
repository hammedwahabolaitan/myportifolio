import React from 'react'
import Header from '../component/Header'
import SubHero from '../pages/SubHero'
import Modal from '../component/Modal'
import Review from '../component/REVIEW'
import AboutSection from '../component/About'
import ResumeSection from '../component/Resume'
import Services from './Services'
import Footers from './Footers'
export default function HomePage() {
  return (
    <div>
      <Header/>
      <SubHero />
      <AboutSection />
      <ResumeSection />
      <Services />
      <Review />
      <Footers/>
      <Modal />
    </div>
  )
}
