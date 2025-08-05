import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import './main.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  // Add to cart
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <header>
        <h1>FlipCart Store</h1>
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒 <span id="cartCount">{cart.length}</span>
        </div>
      </header>

      <main className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <CartSidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </>
  );
};

export default App;
