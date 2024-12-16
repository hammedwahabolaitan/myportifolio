import React from 'react'
import Header from '../component/Header'
import SubHero from '../pages/SubHero'
import Footer from '../pages/footer'
import Modal from '../component/Modal'
import Review from '../component/REVIEW'
import AboutSection from '../component/About'
import ResumeSection from '../component/Resume'
import Services from './Services'
import Blog from '../component/Blog'
import FaqSection from '../component/Faq'
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
<Footer />
<Blog />
<FaqSection />
{/* <ContactPage /> */}
{/* <SpecialProduct /> */}
<Modal />
    </div>
  )
}
