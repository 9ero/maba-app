import { useState, useEffect } from 'react'
import style from './MainSection.module.scss'
import cassava from './../../assets/cassava/cassava.webp'
import cassava2 from './../../assets/cassava/cassava2.webp'
import cassava4 from './../../assets/cassava/cassava4.webp'
import cassava5 from './../../assets/cassava/cassava5.webp'
import cassava6 from './../../assets/cassava/cassava6.webp'

export const MainSection = () => {
    const [imageCounter, setImageCounter] = useState(0)

    const imageList = [cassava, cassava2, cassava4, cassava5, cassava6]

    const changeImage = () => {
        imageCounter < imageList.length - 1 ? setImageCounter(imageCounter + 1) : setImageCounter(0)
    }
    
    useEffect(() => {

        const interval = setInterval(changeImage, 15000)

        return () => clearInterval(interval)
    }, [imageCounter])


    return <div className={style.container}>
        <div className={style.containerInfo}>
            <h3>Cassava</h3>
            <h2>Our star product</h2>
            <p>¿Buscas diversificar tu dieta y explorar sabores auténticos? La yuca es la respuesta. Originaria de tierras lejanas y acogida en cocinas de todo el mundo, esta planta sorprende con su capacidad de adaptarse a una amplia gama de platos y preparaciones.</p>
            <button className={style.containerInfoQuote}>Quote NOW</button>
            <button className={style.containerInfoContact}>Contact Us</button>
        </div>
        <div style={{ backgroundImage: `url(${imageList[imageCounter]})` }} className={style.containerPhoto} />
    </div>
}