import { Product } from "./Product"
import style from './ProductsList.module.scss'
import cassava from './../../assets/cassava/cassava2.jpg'
import cassava2 from './../../assets/cassava/cassava3.jpg'
import ayote from './../../assets/ayote/ayote2.webp'
import ayote2 from './../../assets/ayote/ayote.webp'


export const ProductsList = ()=>{
    return(
    <div className={style.container}>
        <Product normalPhoto={cassava} hoveredPhoto={cassava2}>Yuca</Product>
        <Product normalPhoto={ayote} hoveredPhoto={ayote2}>Ayote</Product>
    </div>
    )
}