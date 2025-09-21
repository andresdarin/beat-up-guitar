
import { use, useEffect, useState } from 'react'
import { Guitar } from './components/Guitar.jsx'
import Header from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { db } from './data/db.js'


function App() {
  const [guitars, setGuitars] = useState([])
  const [cart, setCart] = useState([])

  const MAX_ITEMS = 10
  const MIN_ITEMS = 1

  useEffect(() => {
    setGuitars(db)
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = (item) => {    //la inmutabilidad en react sirve para que react detecte los cambios en los estados y vuelva a renderizar los componentes
    const itemExists = cart.findIndex(cartItem => cartItem.id === item.id)

    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }

  }

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }



  return (
    <>
      <Header
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        clearCart={clearCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              cart={cart}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>


      <Footer />

    </>
  )
}

export default App
