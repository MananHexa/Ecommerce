'use client'
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Stylish Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop',
    rating: 4.5,
    price: 79.99,
  },
  {
    id: 2,
    name: 'Running Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    rating: 4.2,
    price: 59.99,
  },
  {
    id: 3,
    name: 'Smart Watch',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop',
    rating: 4.8,
    price: 199.99,
  },
  {
    id: 4,
    name: 'Leather Handbag',
    image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=2129&auto=format&fit=crop',
    rating: 4.3,
    price: 129.99,
  },
];

export default function NewArrivals() {
  return (
    <div className="container mt-5 text-center flex justify-content-center">
         <h1>🔥New Arrivals</h1>
     
       <div className="d-flex flex-row flex-wrap overflow-auto px-3 gap-3 justify-content-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow rounded overflow-hidden"
            style={{
              flex: '1 0 300px',
              maxWidth: '320px',
              minWidth: '280px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Image */}
            <div style={{ width: '100%', height: '200px' }}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Text Section */}
            <div className="p-3">
              <Link
                href={`/products/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <h5>{product.name}</h5>
                <p>⭐ {product.rating} / 5</p>
                <p className="fw-bold">${product.price.toFixed(2)}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
