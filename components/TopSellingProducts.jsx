import { useContext } from 'react'
import Image from 'next/image'
import { CartContext } from '../context/CartContext'

const topSellingProducts = [
  {
    id: '2',
    name: 'Running Shoes',
    image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 59.99,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 199.99,
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Leather Handbag',
    image: 'https://images.unsplash.com/photo-1732963574895-f4b6af2dec06?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 129.99,
    rating: 4.3,
  },
  {
    id: '6',
    name: 'Casual Backpack',
    image: 'https://images.unsplash.com/photo-1591534577302-1696205bb2bc?q=80&w=1974&auto=format&fit=crop',
    price: 69.99,
    rating: 4.1,
  },
  {
    id: '7',
    name: 'Sunglasses',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=2080&auto=format&fit=crop',
    price: 49.99,
    rating: 4.4,
  },
  {
    id: '8',
    name: 'Fitness Tracker',
    image: 'https://images.unsplash.com/photo-1665860455423-166cab57c383?q=80&w=1974&auto=format&fit=crop',
    price: 99.99,
    rating: 4.7,
  },
]

function RatingStars({ rating }) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  return (
    <div className="text-warning">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {halfStar && <span>½</span>}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <span key={`empty-${i}`}>☆</span>
      ))}
    </div>
  )
}

export default function TopSellingProducts() {
  const { cart, addToCart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext)

  return (
    <>
      <h3 className="text-center my-4">🔥 Top Selling Products</h3>
      <div className="d-flex flex-row flex-wrap overflow-auto px-3 gap-3 justify-content-center">
        {topSellingProducts.map((product) => {
          // Find the item in cart by id
          const cartItem = cart.find((item) => item.id === product.id)
          const qty = cartItem ? cartItem.quantity : 0

          return (
            <div
              key={product.id}
              className="card"
              style={{ minWidth: '180px', cursor: 'pointer', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-bottom"
                style={{ fontSize: '0.75rem', fontWeight: 'bold', zIndex: 2 }}
              >
                Best Seller
              </div>

              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={120}
                className="card-img-top rounded-top"
                style={{ objectFit: 'cover' }}
              />

              <div className="card-body p-2">
                <h5 className="card-title mb-1" style={{ fontSize: '1rem' }}>
                  {product.name}
                </h5>
                <RatingStars rating={product.rating} />
                <p className="fw-bold my-2">${product.price.toFixed(2)}</p>

                {qty === 0 ? (
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-danger btn-sm w-100"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="btn btn-danger btn-sm"
                      style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: 1 }}
                    >
                      −
                    </button>
                    <span>{qty}</span>
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="btn btn-danger btn-sm"
                      style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: 1 }}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
