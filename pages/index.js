import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Footer from '../components/Footer'
import NewArrivals from '../components/Newarrival'
import TopSellingProducts from '../components/TopSellingProducts'
import OnSaleProducts from '../components/OnSaleProducts'
import AvailableBrands from '../components/AvailableBrand'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
  }, [])

  const carouselImages = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1470&q=80',
      alt: 'Shopping bags',
      caption: 'Shop with style',
    },
    {
      src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Shopping carts',
      caption: 'Find amazing deals',
    },
    {
      src: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Shopping mall',
      caption: 'Explore your favorite brands',
    },
  ]

  return (
    <div>
      <Header />

      {/* Full width carousel */}
      <div style={{ width: '98vw', height: '80vh', overflow: 'hidden', textAlign: 'center', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={2000}
          showStatus={false}
          stopOnHover
          swipeable={true}
          emulateTouch = {true}
          dynamicHeight={false}
          showIndicators={true}
        >
          {carouselImages.map(({ src, alt, caption }, index) => (
            <div key={index} className="carousel-slide">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <p
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  maxWidth: '60%',
                }}
              >
                {caption}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      <NewArrivals />
          <TopSellingProducts/>
          <OnSaleProducts/>
          <AvailableBrands/>
      {/* <footer style={{ textAlign: 'center', padding: '1rem 0', marginTop: '2rem' }}>
        &copy; 2025 ShopCo
      </footer> */}
      <Footer />
    </div>
  )
}
