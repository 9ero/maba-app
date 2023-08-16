import { Link } from "react-router-dom"
import style from './Header.module.scss'
import { useEffect, useState } from "react"
import Logo from './../assets/logoMABAv2.svg'
import Eng from './../assets/usaFlag.svg'
import Esp from './../assets/spainFlag.svg'
import { CgMenuRight, CgClose } from 'react-icons/cg'


import { useChangeLanguageContext, useLabelsContext, useLanguageContext } from "./LanguageProvider"
export const Header = () => {
    const language = useLanguageContext()
    const text = useLabelsContext()
    const changeLanguage = useChangeLanguageContext()
    const [expanded, setExpanded] = useState(false)
    const expand = () => {
        setExpanded(!expanded)
    }


    useEffect(() => {

    })


    return <div className={style.headerContainer}>

        <nav>
            <div className={style.logoContainer}>
                <Link to='/'><img className={style.logo} src={Logo} alt="Logo MABA AgroExport" /></Link>
            </div>
            <div onClick={expanded?expand:''} className={`${style.links} ${expanded ? style.expand : ''}`}>
                <div className={style.flagContainer}>
                    <img className={style.flag} onClick={() => changeLanguage('eng')} src={Eng} alt="Usa Flag" />
                    <img className={style.flag} onClick={() => changeLanguage('spa')} src={Esp} alt="Spain Flag" />
                </div>
                <ul>
                    <li>
                        <Link to='/' >{text.nav.home}</Link>
                    </li>
                    <li>
                        <Link to='/products' >{text.nav.products}</Link>
                    </li>
                    <li>
                        <Link to='/' >{text.nav.about}</Link>
                    </li>
                    <li className={style.contactLink}>
                        <Link to='/contact' >{text.nav.contact}</Link>
                    </li>
                </ul>
                
            </div>
            <div className={style.toggler}>
                {expanded ? <CgClose onClick={expand} className={style.togglerIcon} /> : <CgMenuRight onClick={expand} className={style.togglerIcon} />}
            </div>

        </nav>


    </div>
}