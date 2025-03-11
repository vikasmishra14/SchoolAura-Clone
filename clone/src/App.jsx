import { FaPhoneAlt, FaMobileAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import './App.css'
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import AchieveSection from './components/AchieveSection';
import EducationSection from './components/EductationSection';
import HappyClient from './components/HappyClient';
import SpreadingSection from './components/SpreadingSection';
import HappyClient2 from './components/HappyClient2';
import Footer from './components/Footer';
import ParentsReview from './components/ParentsReview';
import Newsletter from './components/Newsletter';

function App() {

  return (
    <>
      <header>
      
    <div className='header-main-div'>
      <div className='header-contact'>
        <div className="contact-number">
        <i className='contact-icons'> <FaPhoneAlt /></i>
        <span className='mob-num'>11111111111</span>
        </div>
        <a className='anchor-mail' href="mailto:contact@schoolaura.com">
          <i className='contact-icons'><MdEmail /></i>
          contact@schoolaura.com
        </a>
      </div>
      <div className='header-social'>
        <div className='social-icons'>
          <a className='whatsapp-icon' href="#">
            <FaWhatsapp /> Whatsapp
          </a>
          <a className='mobile-icon' href="#">
            <FaMobileAlt /> Mobile App
          </a>
        </div>
        <div className='login-register'>
          <a className='login-icon' href="#">Login</a>
          <a className='register-icon' href="#">Registration</a>
        </div>
      </div>
    </div>
  <Navbar/>
      </header> 
       <HeroBanner/>
       <AchieveSection/>
       <EducationSection/>
       <HappyClient/>
       <SpreadingSection/>
       <HappyClient2/>
       <ParentsReview/>
       <Newsletter/>
       <Footer/> 
    </>
  )
}

export default App;
