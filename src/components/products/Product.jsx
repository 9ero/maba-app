import { useState } from "react"
import style from './Product.module.scss'

export const Product = ({ children, normalPhoto, hoveredPhoto }) => {
    const [hovered, setHovered] = useState(false)

    const mouseEnterHandler= ()=>{
        setHovered(true)
    }
    const mouseLeaveHandler= ()=>{
        setHovered(false)
    }

    return (
        
        <div className={style.product} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
            <img src={hovered ? hoveredPhoto : normalPhoto} alt={children} />
            <h2>{children}</h2>
        </div>
    )
}