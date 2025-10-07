import react, { useState } from "react"

function App() {

  const [celcius, setCelcius] = useState('')
  const [faren, setFaren] = useState('')

  function handleCelcius(event) {
    const value = event.target.value
    const input  = parseInt(value, 10)

    let output = 32 + (1.8*input)
    setFaren(output)

  }


  function handleFaren(event) {
    const value = event.target.value
    const input  = parseInt(value, 10)

    let output =  (input - 32)/1.8
    setCelcius(output)

  }

  return (
    <div className="App">
      <header className="App-header">

        <p>
          The no 1 temperature converter
        </p>
        <div className="output">
          <h1>Celcius {celcius}</h1>
          <h1>Farenheight {faren}</h1>
        </div>
        <div className="input">
          <input type="text" onChange={handleCelcius} />
          <br />
          <br />
          <input type="text" onChange={handleFaren} />

        </div>
      </header>
    </div>
  );
}

export default App;
