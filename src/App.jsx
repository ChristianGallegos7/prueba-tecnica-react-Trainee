import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
function App () {
  const [fact, setFact] = useState('')
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App de gatitos PRUEBA TECNICA DE REACT</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App
