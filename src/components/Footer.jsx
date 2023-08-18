import { useState } from 'react'
import style from './Footer.module.scss'
import { useLabelsContext } from './LanguageProvider'
import { CgMail, CgPhone } from 'react-icons/cg'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'

export const Footer = () => {
    const text = useLabelsContext()
    const [copied, setCopied] = useState(false)

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => { setCopied(false) }, 750)
    }

    return <div className={style.footer}>


        <div className={style.footerElements}>
            <div onClick={() => copyText(text.footer.email)} className={style.footerElementsElement}>
                <CgMail className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.email}</p> : <p>Text copied</p>}
            </div>
            <div onClick={() => copyText(text.footer.phone)} className={style.footerElementsElement}>
                <CgPhone className={style.footerElementsElementIcon} /> {!copied ? <p>{text.footer.phone}</p> : <p>Text copied</p>}
            </div>
            <div className={style.footerElementsElement}><FaWhatsapp className={style.footerElementsElementIcon} /><p>{text.footer.whatsapp}</p></div>
            <div className={style.footerElementsElement}><FaFacebook className={style.footerElementsElementIcon} /><p>{text.footer.facebook}</p></div>
        </div>
        <div className={style.footerDisclaimer}>
            <h5>{text.footer.disclaimer}</h5>
        </div>
    </div>
}