export default function handler(req, res) {
  const products = [
    { id: '1', name: 'Product 1', price: 29.99, image: '/images/product1.jpg', description: 'Description for Product 1' },
    { id: '2', name: 'Product 2', price: 59.99, image: '/images/product2.jpg', description: 'Description for Product 2' },
    { id: '3', name: 'Product 3', price: 19.99, image: '/images/product3.jpg', description: 'Description for Product 3' },
    { id: '4', name: 'Product 4', price: 99.99, image: '/images/product4.jpg', description: 'Description for Product 4' }
  ]
  res.status(200).json(products)
}