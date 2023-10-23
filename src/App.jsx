import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import bg from "./assets/herobg.png"
import Skills from './components/Skills/Skills'


function App() {

  return (
    <>
      <div className=' bg-[#050816] '>

        <div className='h-fit bg-cover bg-center' style={{ backgroundImage: `url(${bg})` }}>
          <div className='mx-auto max-w-7xl px-7'>
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </div>
        <div className='mx-auto max-w-7xl px-7'>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
