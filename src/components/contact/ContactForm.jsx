import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

import { Link } from 'react-router-dom'
import { BsWhatsapp } from 'react-icons/bs'
import style from './ContactForm.module.scss'

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qnmq0th', 'template_e8rhzkh', form.current, '602dI52C4zTPsX-2s')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

        const maxLenght = 200
        const [message, setMessage] = useState('')
        const [name, setName] = useState('')

        

        

        const onWaMessageREady = () => {
            name != '' && setMessage(name + '%0A' + message)
            return
        }

        return (
            <section className={style.formContainer}>
                
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Phone number</label>
                    <input type="number" name="phone_number" />
                    <label>Message</label>
                    <textarea  name="message" />
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                    <input type="submit" value="Send" />
                    <Link to={`https://wa.me/50685062925?text=${message}`} target="_blank" onClick={onWaMessageREady}><div className={style.newButton} ><BsWhatsapp className={style.icon} /><p>Send</p></div></Link>
                    </div>
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