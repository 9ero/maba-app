import { Link } from "react-router-dom"
import style from './Header.module.scss'
import { useState } from "react"
import Logo from './../assets/logoMABAv2.svg'
import Eng from './../assets/usaFlag.svg'
import Esp from './../assets/spainFlag.svg'
import { CgMenuRight, CgClose } from 'react-icons/cg'


import { useChangeLanguageContext, useLabelsContext,  } from "./LanguageProvider"
export const Header = () => {
    const text = useLabelsContext()
    const changeLanguage = useChangeLanguageContext()
    const [expanded, setExpanded] = useState(false)
    const expand = () => {
        setExpanded(!expanded)
    }
    





    return <header className={style.headerContainer}>

        <nav>
            <div className={style.logoContainer}>
                <Link to='/'><img className={style.logo} src={Logo} alt="Logo MABA AgroExport" /></Link>
            </div>
            <div onClick={expanded?expand:null} className={`${style.links} ${expanded ? style.expand : ''}`}>
                <div className={style.flagContainer}>
                    <img style={text.lang == 'eng'?{transform: 'scale(1.2)'}:{transform: 'scale(1)'}} className={style.flag} onClick={() => changeLanguage('eng')} src={Eng} alt="Usa Flag" />
                    <img style={text.lang == 'spa'?{transform: 'scale(1.2)'}:{transform: 'scale(1)'}} className={style.flag} onClick={() => changeLanguage('spa')} src={Esp} alt="Spain Flag" />
                </div>
                <ul>
                    <li>
                        <Link to='/' >{text.nav.home}</Link>
                    </li>
                    <li>
                        <Link to='/products' >{text.nav.products}</Link>
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


    </header>
}