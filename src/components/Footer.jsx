import { Fragment, useState } from 'react'
import style from './Footer.module.scss'
import { useLabelsContext } from './LanguageProvider'
import {BsEnvelope, BsFacebook, BsTelephone, BsWhatsapp} from 'react-icons/bs'



export const Footer = () => {
    const text = useLabelsContext()
    const [copied, setCopied] = useState(false)

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 750)
    }



 

    return <footer className={style.footer}>


        <div className={style.footerElements}>
            <div onClick={() => copyText(text.footer.email)} className={style.footerElementsElement}>
                <BsEnvelope className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.email}</p> : <p>Text copied</p>}
            </div>
            <div onClick={() => copyText(text.footer.phone)} className={style.footerElementsElement}>
                <BsTelephone className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.phone}</p> : <p>Text copied</p>}
            </div>
            <div onClick={()=>window.open("https://wa.me/50685062925?text=I'm%20interested%20in%20your%20products",'_blank', 'rel=noopener noreferrer')} className={style.footerElementsElement}><BsWhatsapp className={style.footerElementsElementIcon} /><p>{text.footer.whatsapp}</p></div>
            <div className={style.footerElementsElement}><BsFacebook className={style.footerElementsElementIcon} /><p>{text.footer.facebook}</p></div>
        </div>
        <div className={style.footerDisclaimer}>
            <h5>{text.footer.disclaimer}</h5>
        </div>
    </footer>
}