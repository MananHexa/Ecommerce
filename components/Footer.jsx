import { wrap } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex-wrap-center">
  {/* SHOP.CO logo section */}
  <div className="md:col-span-2 order-1 md:order-none text-center md:text-left" style={{display:'flex', flexWrap:'wrap',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <h2 className="text-2xl font-bold mb-2">SHOP.CO</h2>
    <p className="text-sm mb-4">
      Fashion that fits your lifestyle. From bold to basics, we bring style to everyone.
    </p>
    <div className="flex justify-center md:justify-start space-x-4 text-xl">
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-pinterest-p"></i></a>
    </div>
  </div>

  {/* Other footer columns */}
  <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
  <div className="order-2">
    <h3 className="font-semibold mb-2">Company</h3>
    <ul className="space-y-1 text-sm">
      <li><a href="#">About</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Works</a></li>
      <li><a href="#">Career</a></li>
    </ul>
  </div>

  <div className="order-3">
    <h3 className="font-semibold mb-2">Help</h3>
    <ul className="space-y-1 text-sm">
      <li><a href="#">Support</a></li>
      <li><a href="#">Delivery Info</a></li>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms</a></li>
    </ul>
  </div>

  <div className="order-4">
    <h3 className="font-semibold mb-2">Resources</h3>
    <ul className="space-y-1 text-sm">
      <li><a href="#">Blog</a></li>
      <li><a href="#">Tutorials</a></li>
      <li><a href="#">eBooks</a></li>
      <li><a href="#">Playlists</a></li>
    </ul>
  </div>

  <div className="order-5 space-x-1" >
    <h3 className="font-semibold mb-2 space-x-1" style={{textAlign:"center"}} >F A Q</h3>
    <ul className="space-y-1 text-sm">
      <li><a href="#">Account</a></li>
      <li><a href="#">Delivery</a></li>
      <li><a href="#">Order</a></li>
      <li><a href="#">Payment</a></li>
    </ul>
  </div>
</div>
</div>

        {/* Newsletter Section */}
        <div className="bg-black text-white p-6 rounded-lg mb-6 text-center" style={{borderRadius: '2rem'}}>
          <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4">Get updates on new arrivals and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-full sm:w-64 text-black" style={{margin:"1rem", height:"3rem"}}
            />
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200" style={{height:"3rem"}}>
              Subscribe
            </button>
          </form>
        </div>
 
        {/* Footer Bottom with Online Payment Logos */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-4 pb-6 text-sm">
          <p>&copy; 2025 Shop.co. Made by <span className="font-medium">Manan Shah</span></p>
         <div className="footerimage flex space-x-3 mt-2 md:mt-0">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 w-auto object-contain" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6 w-auto object-contain" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="h-6 w-auto object-contain" />

</div>

        </div>
      </div>
    </footer>
  );
}
