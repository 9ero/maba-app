import { useState } from "react"
import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"
import { Link } from 'react-router-dom'
import {BsWhatsapp } from 'react-icons/bs'
import { ContactForm } from "../components/contact/ContactForm"

export const Contact = () => {
    const text = useLabelsContext()
    const maxLenght = 200
    const [message, setMessage] = useState('')

    const formattingUrl = (text) => {
        const newLineFormat = text.replaceAll('\n', '%0A')
        newLineFormat.replaceAll('\r', '%0A')
        newLineFormat.replaceAll(' ', '+')
        return newLineFormat
    }
    const updateMessage = (event) => {
        console.log(event.target.value)
        const formatedString = formattingUrl(event.target.value)
        setMessage(formatedString)
    }
    const clickHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Layout title={text.title.contact}>
            <ContactForm/>
        </Layout>
    )
}