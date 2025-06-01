// components/OnSaleProducts.js
import Image from 'next/image'
import Link from 'next/link'

const onSaleProducts = [
  {
    id: 5,
    name: 'Denim Jeans',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.1,
    originalPrice: 59.99,
    salePrice: 39.99,
  },
  {
    id: 6,
    name: 'Casual T-Shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    originalPrice: 29.99,
    salePrice: 19.99,
  },
  {
    id: 7,
    name: 'Leather Boots',
    image: 'https://images.unsplash.com/photo-1602250523342-d2212b96a297?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    originalPrice: 99.99,
    salePrice: 74.99,
  },
]

export default function OnSaleProducts() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-danger text-center fw-bold">🔥 On Sale Now!</h2>
      <div className="row">
        {onSaleProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Link href={`/products/${product.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 position-relative shadow">
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">SALE</span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">⭐ {product.rating} / 5</p>
                  <p className="card-text">
                    <span className="text-muted text-decoration-line-through me-2">${product.originalPrice.toFixed(2)}</span>
                    <span className="fw-bold text-danger">${product.salePrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
