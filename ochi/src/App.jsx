import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'  
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  
  return (
    <>
    <div className='w-full min-h-screen bg-zinc-900 text-white'> 
     <Navbar />
     <Landing/>
     <Marquee/>
     <About/>
     <Eyes/>
     </div>
    </>
  )
}

export default App
