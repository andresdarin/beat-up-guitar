
import { Guitar } from './components/Guitar.jsx'
import ModernHeader from './components/ModernHeader.jsx'
import { Footer } from './components/Footer.jsx'
import { useCart } from './hooks/useCart.js'

function App() {

  const { guitars, cart, handleAddToCart, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <>
      <ModernHeader
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        guitars={guitars}
        handleAddToCart={handleAddToCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
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
