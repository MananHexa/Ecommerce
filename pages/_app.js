import { useEffect } from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from '../context/CartContext'; // adjust path if needed

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
