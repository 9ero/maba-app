import { useState } from 'react'
import style from './Footer.module.scss'
import { useLabelsContext } from './LanguageProvider'
import { BsEnvelope, BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'



export const Footer = () => {
    const text = useLabelsContext()
    const [copied, setCopied] = useState(false)

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 750)
    }

    const formattingUrl = (text) => {
        return text.replaceAll(' ', '+')
    }




    return <footer className={style.footer}>


        <div className={style.footerElements}>
            <div onClick={() => copyText(text.footer.email)} className={style.footerElementsElement}>
                <BsEnvelope className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.email}</p> : <p>Text copied</p>}
            </div>
            <div onClick={() => copyText(text.footer.phone)} className={style.footerElementsElement}>
                <BsTelephone className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.phone}</p> : <p>Text copied</p>}
            </div>
            <Link style={{textDecoration: 'none'}} to={`https://wa.me/50685062925?text=${formattingUrl('asd')}`} target='_Blank'>
                <div className={style.footerElementsElement}>
                    <BsWhatsapp className={style.footerElementsElementIcon} />
                    <p>{text.footer.whatsapp}</p>
                </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to={'http://www.facebook.com'} target='_Blank'><div className={style.footerElementsElement}>
                <BsFacebook className={style.footerElementsElementIcon} />
                <p>{text.footer.facebook}</p>
            </div></Link>

        </div>
        <div className={style.footerDisclaimer}>
            <h5>{text.footer.disclaimer}</h5>
        </div>
    </footer>
}