import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage'
import Fourthpage from './components/Fourthpage'
import Fifthpage from './components/Fifthpage'
import LastPage from './components/LastPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>

      <Secondpage/>
      <Thirdpage/>
      <Fourthpage/>
      <Fifthpage/>
      <LastPage/>
      
    </div>
     
  )
}

export default App
