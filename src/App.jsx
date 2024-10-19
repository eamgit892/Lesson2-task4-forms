import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormField from './components/FormField'

function App() {

  function myClickHandler(ev) {
    console.log('clicked!!!');
    ev.preventDefault()
    // let fields = ev.target.input;
    let nodes = ev.target.parentNode.children
    let lastIndex = nodes.length - 2 // minus last button element
    for (let i = 0; i <= lastIndex; i++) {
      console.log(nodes[i].value)
    }
  }
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3 style={{color: "gray"}}>now goes homework task 4 by Yevhen Mozoliak</h3>
      {/* -------------------------------FORM --------------------- */}
      <form>
        <FormField/>
        <FormField/>
        <FormField/>
        <FormField/>
        <FormField/>
        <button onClick={myClickHandler}>Press me</button>
      </form>
    </>
  )
}

export default App
