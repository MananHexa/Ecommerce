import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import Header from '../../components/Header'
import { CartContext } from '../../context/CartContext'

const products = [
  {
    id: '1',
    name: 'Stylish Jacket',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580047883831-5db03837b0b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    rating: 4.5,
    price: 79.99,
  },
  {
    id: '2',
    name: 'Running Shoes',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    rating: 4.2,
    price: 59.99,
  },
  {
    id: '3',
    name: 'Smart Watch',
    images: [
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    rating: 4.8,
    price: 199.99,
  },
  {
    id: '4',
    name: 'Leather Handbag',
    images: [
      'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=2129&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1628149453636-23e882b3c1fc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    rating: 4.3,
    price: 129.99,
  },
  {
    id: '5',
    name: 'Denim Jeans',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.1,
    originalPrice: 59.99,
    salePrice: 39.99,
  },
  {
    id: '6',
    name: 'Casual T-Shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    originalPrice: 29.99,
    salePrice: 19.99,
  },
  {
    id: '7',
    name: 'Leather Boots',
    image: 'https://images.unsplash.com/photo-1602250523342-d2212b96a297?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    originalPrice: 99.99,
    salePrice: 74.99,
  },
]

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { cart, addToCart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const [selectedImage, setSelectedImage] = useState(null);

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    if (product) {
      if (product.images) {
        setSelectedImage(product.images[0]);
      } else {
        setSelectedImage(product.image);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div>
        <Header />
        <div className="container mt-5 text-center">
          <h2>This item is not currently available.</h2>
          <p>Please check back later or browse other products.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="card p-3 shadow-sm">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={product.name}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              )}
              <h2 className="mt-3">{product.name}</h2>
              <p>⭐ {product.rating} / 5</p>

              {product.salePrice ? (
                <p>
                  <span className="text-muted text-decoration-line-through me-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="fw-bold text-danger">${product.salePrice.toFixed(2)}</span>
                </p>
              ) : (
                <p className="fw-bold">${product.price.toFixed(2)}</p>
              )}

              {!cart.find(item => item.id === product.id) ? (
                <button className="btn btn-danger" onClick={() => addToCart(product, selectedImage)}>
                  Add to Cart
                </button>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
                    Remove
                  </button>
                  <button className="btn btn-outline-secondary" onClick={() => decreaseQty(product.id)}>
                    -
                  </button>
                  <span>{cart.find(item => item.id === product.id).quantity}</span>
                  <button className="btn btn-outline-secondary" onClick={() => increaseQty(product.id)}>
                    +
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="col-12 col-md-4 d-flex flex-column gap-3">
            {(product.images || [product.image]).map((img, index) => (
              <div
                key={index}
                className={`border rounded overflow-hidden ${
                  selectedImage === img ? 'border-primary' : 'border-secondary'
                }`}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  width={120}
                  height={180}
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
