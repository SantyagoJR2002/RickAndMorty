import React, {useState} from 'react'
import './App.css'
import Search from './components/Search'
import RickAndMorty from './RickAndMorty'
import InfoLocation from './components/InfoLocation'


function App() {
  const [count, setCount] = useState()

  return (
    <div className="App">
     <RickAndMorty/>
    </div>
  )
}

export default App