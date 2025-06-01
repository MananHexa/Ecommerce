import FilterMenu from "../components/FilterMenu"
import Header from "../components/Header"
import NewArrivals from "../components/Newarrival"
import Cart from "../components/Cart"
import OnSaleProducts from "../components/OnSaleProducts"
import Footer from "../components/Footer"
export default function Shop() {
    return(
        <>
       <Header/>
       <div className="container my-4 d-flex flex-column flex-md-row gap-4" style={{justifyContent:"center"}}>
      
       <Cart/>
         </div>
       <Footer/>
     
       </>
    )
}