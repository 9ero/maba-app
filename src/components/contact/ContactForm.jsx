import { useState } from "react"
import { useLabelsContext } from "../../components/LanguageProvider"
import { Link } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import style from './ContactForm.module.scss'

export const ContactForm = () => {
    const text = useLabelsContext()
    const maxLenght = 200
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    const formattingUrl = (text) => {
        const newLineFormat = text.replaceAll('\n', '%0A')
        newLineFormat.replaceAll('\r', '%0A')
        newLineFormat.replaceAll(' ', '+')
        return newLineFormat
    }

    const updateMessage = (event) => {
        const formatedString = formattingUrl(event.target.value)
        setMessage(formatedString)
    }

    const updateName = (event) => {
        const formatedString = formattingUrl(event.target.value)
        setName(formatedString)
    }

    const onWaMessageREady = () => {
        name != '' && setMessage(name + '%0A' + message)
        return
    }

    return (
        <section className={style.formContainer}>
            <form action="">
                <label htmlFor="nameInput" >Name </label><br />
                <input type="text" id="nameInput" placeholder="Your Name" onChange={updateName} /><br />
                <label htmlFor="emailInput">Email </label><br />
                <input type="email" id="emailInput" placeholder="email@domain.com" /><br />
                <label htmlFor="messageInput">Message </label><br />
                <textarea type="text" id="messageInput" onChange={updateMessage} placeholder="Type your message here" maxLength={maxLenght} cols={35} rows={10} style={{ resize: 'none' }} /><br />
                <Link style={{ textDecoration: 'none' }} to={`https://wa.me/50685062925?text=${message}`} target="_blank" onClick={onWaMessageREady}><div className={style.newButton} ><BsWhatsapp className={style.icon} /><p>Send</p></div></Link>
            </form>
            <div className={style.linksContainer}>
                <h5>Phones: </h5>
                <p>+506 8394-4630</p>
                <p>+506 6417-7956</p>
                <p>+506 8506-2925</p>
                <h5>Email: </h5>
                <p>empa.maba@gmail.com</p>
                <h5>Our social networks: </h5>
                <p>facebook.com/maba.agroexport</p>
            </div>
        </section>
    )
}