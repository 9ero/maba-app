import { useState, useEffect } from 'react'
import style from './MainSection.module.scss'
import cassava from './../../assets/cassava/cassava.webp'
import cassava2 from './../../assets/cassava/cassava2.webp'
import cassava4 from './../../assets/cassava/cassava4.webp'
import cassava5 from './../../assets/cassava/cassava5.webp'
import cassava6 from './../../assets/cassava/cassava6.webp'
import { useLabelsContext } from '../LanguageProvider'
import { useNavigate } from 'react-router-dom'

export const MainSection = () => {
    const [imageCounter, setImageCounter] = useState(0)

    const imageList = [cassava2, cassava5, cassava4, cassava, cassava6]

    const text = useLabelsContext()
    const navigate = useNavigate()

    const changeImage = () => {
        imageCounter < imageList.length - 1 ? setImageCounter(imageCounter + 1) : setImageCounter(0)
    }
    const contacHandler=()=>{
         navigate('/contact')
    }
    const quoteHandler = ()=>{
        const formattingUrl = (text) => {
            return text.replaceAll(' ', '+')
        }
        window.open(`https://wa.me/50685062925?text=${formattingUrl("Hello, i'm interested in your products")}`)
    }
    
    useEffect(() => {

        const interval = setInterval(changeImage, 15000)

        return () => clearInterval(interval)
    }, [imageCounter])


    return <article className={style.container}>
        <div className={style.containerInfo}>
            <h3>{text.pages.home.mainSection.title}</h3>
            <h2>{text.pages.home.mainSection.subTitle}</h2>
            <p> {text.pages.home.mainSection.description}</p>
            <button onClick={quoteHandler} className={style.containerInfoQuote}>{text.pages.home.mainSection.quote}</button>
            <button onClick={contacHandler} className={style.containerInfoContact}>{text.pages.home.mainSection.contact}</button>
        </div>
        <div style={{ backgroundImage: `url(${imageList[imageCounter]})` }} className={style.containerPhoto} />
    </article>
}