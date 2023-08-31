import { Product } from "./Product"
import cassava from './../../assets/cassava/cassava2.jpg'
import cassava2 from './../../assets/cassava/cassava3.jpg'


export const ProductsList = ()=>{
    return(
    <div>
        <Product normalPhoto={cassava} hoveredPhoto={cassava2}>Yuca</Product>
    </div>
    )
}