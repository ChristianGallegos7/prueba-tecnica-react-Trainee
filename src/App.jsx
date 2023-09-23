import './App.css'
import { useEffect, useState } from 'react'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(res => {
            const { url } = res
            setImageUrl(`${CAT_PREFIX_IMAGE_URL}${url}`)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos PRUEBA TECNICA DE REACT</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Imagen obtenida mediante el fact ${fact}`} />}
      </section>
    </main>
  )
}

export default App
