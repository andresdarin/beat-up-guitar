
import { use, useEffect, useState } from 'react'
import { Guitar } from './components/Guitar.jsx'
import Header from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { db } from './data/db.js'



function App() {

  // 1. Definir un estado para las guitarras
  const [guitars, setGuitars] = useState([])

  useEffect(() => {
    // 2. Actualizar el estado de las guitarras
    setGuitars(db)
  }, [])

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
        </div>
      </main>


      <Footer />

    </>
  )
}

export default App
