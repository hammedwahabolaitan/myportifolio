import React from 'react'
import Header from '../component/Header'
import SubHero from '../pages/SubHero'
import Modal from '../component/Modal'
import Review from '../component/REVIEW'
import AboutSection from '../component/About'
import ResumeSection from '../component/Resume'
import Services from './Services'
import Blog from '../component/Blog'
import Footers from './Footers'
import FaqSection from '../component/Faq'
// import Footer from '../pages/Footer'
// import ContactPage from '../component/ContactPage'
// import SpecialProduct from './SpecialProduct'
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
      <Blog />
      <FaqSection />
{/* <ContactPage /> */}
{/* <SpecialProduct /> */}
<Modal />
    </div>
  )
}
