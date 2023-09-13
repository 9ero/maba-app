import { Product } from "./Product"
import style from './ProductsList.module.scss'
import cassavaE from './../../assets/cassava/yucaE.webp'
import cassavaC from './../../assets/cassava/yucaC.webp'
import ayoteE from './../../assets/ayote/ayote2.webp'
import ayoteC from './../../assets/ayote/ayote.webp'
import ayotemE from './../../assets/ayoteM/ayotemE.webp'
import ayotemC from './../../assets/ayoteM/ayotemC.webp'
import nampiE from './../../assets/nampi/nampiE.webp'
import nampiC from './../../assets/nampi/nampiC.webp'
import tiquisqueC from './../../assets/tiquisque/tiquisqueC.webp'
import tiquisqueE from './../../assets/tiquisque/tiquisqueE.webp'
import jengibreC from './../../assets/jengibre/jengibreC.webp'
import jengibreE from './../../assets/jengibre/jengibreE.webp'
import { useLabelsContext } from "../LanguageProvider"



export const ProductsList = () => {
    const text = useLabelsContext()
    const products = [
        { name: text.pages.products.productsList.yuca.name, sciName: text.pages.products.productsList.yuca.sciName, p1: cassavaE, p2: cassavaC },
        { name: text.pages.products.productsList.ayote.name, sciName: text.pages.products.productsList.ayote.sciName, p1: ayoteE, p2: ayoteC },
        { name: text.pages.products.productsList.ayoteM.name, sciName: text.pages.products.productsList.ayoteM.sciName, p1: ayotemE, p2: ayotemC },
        { name: text.pages.products.productsList.nampi.name, sciName: text.pages.products.productsList.nampi.sciName, p1: nampiE, p2: nampiC },
        { name: text.pages.products.productsList.tiquisque.name, sciName: text.pages.products.productsList.tiquisque.sciName, p1: tiquisqueE, p2: tiquisqueC },
        { name: text.pages.products.productsList.jengibre.name, sciName: text.pages.products.productsList.jengibre.sciName, p1: jengibreE, p2: jengibreC }
    ]
    return (
        <div className={style.container}>
            {products.map((product, index)=>{  
               return <Product key={index} normalPhoto={product.p1} hoveredPhoto={product.p2} ><p>{product.name}<br/><span>{product.sciName}</span></p></Product>
            })}
        </div>
    )
}