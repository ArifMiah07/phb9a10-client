import './index.css'
import './App.css'
import logo from '../public/images/logo.png'

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold playball'>Vite + React</h1>
      <div>
        <img className='w-52' src={logo} alt="" />
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
