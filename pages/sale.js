import FilterMenu from "../components/FilterMenu"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NewArrivals from "../components/Newarrival"
import OnSaleProducts from "../components/OnSaleProducts"
export default function Shop() {
    return(
        <>
       <Header/>
       <div className="container my-4 d-flex flex-column flex-md-row gap-4" >
       <FilterMenu style={{position:'relative'}}/>
       <OnSaleProducts/>
         </div>
       <Footer/>
     
       </>
    )
}