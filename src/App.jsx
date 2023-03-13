import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Feed from './Feed/Feed'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar/>
        <Feed/>


      </div>
    </div>
  )
}

export default App
