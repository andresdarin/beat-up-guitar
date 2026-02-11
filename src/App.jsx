import ModernHeader from './components/ModernHeader.jsx'
import Categories from './components/Categories.jsx'
import Featured from './components/Featured.jsx'
import Shop from './components/Shop.jsx'
import { Footer } from './components/Footer.jsx'
import { useCart } from './hooks/useCart.js'

function App() {

  const { guitars, cart, handleAddToCart, handleRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity, clearCart, isEmpty, cartTotal } = useCart()

  return (
    <>
      {/* Section 1: Header */}
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

      {/* Section 2: Categories */}
      <Categories />

      {/* Section 3: Featured (LOUD IS BETTER) */}
      <Featured />

      {/* Section 4: The Shop (Product Grid) */}
      <Shop
        guitars={guitars}
        handleAddToCart={handleAddToCart}
      />

      {/* Section 5: Footer */}
      <Footer />

    </>
  )
}

export default App
