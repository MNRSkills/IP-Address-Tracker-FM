import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchIP from './Component/searchIP'


// fetch the IP data we need a search component
// we need to get a map for the display and let's start with mobile
function App() {
  const [searchIP, setSearchIP] = useState("props")
 
  const inputIP = (e) => {
    console.log("THIS IS SEARCHING IP", e.target.value)
  }

  return (
    <>
      <SearchIP inputIP={inputIP} />
      <h1>Let's try this with SCSS</h1>
    </>
  )
}

export default App
