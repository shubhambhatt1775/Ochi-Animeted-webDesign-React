import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 text-white'> 
     <Navbar />
     <Landing/>
     </div>
    </>
  )
}

export default App
