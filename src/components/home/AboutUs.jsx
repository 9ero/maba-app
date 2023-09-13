import style from './AboutUs.module.scss'
import fronImage from './../../assets/paisaje.webp'
import { useInView } from 'react-intersection-observer'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { useLabelsContext } from '../LanguageProvider'


export const AboutUs = () => {
    const { ref, inView } = useInView({ threshold: 0 })
    const text = useLabelsContext()

    return (<section>
        <h2 style={inView ? { opacity: 0 } : { opacity: 1 }} className={style.helperTitle}><span><BsFillArrowDownCircleFill /></span>  {text.pages.home.aboutUs.titleHelper}  <span><BsFillArrowDownCircleFill /></span></h2>
        <div ref={ref} className={`${style.aboutUs}  ${inView && style.active}`} >
            <img src={fronImage} alt='Front img' className={`${style.aboutUsBlock} ${style.photo}`} />
            <div className={style.aboutUsBlock}>
                <h2>{text.pages.home.aboutUs.story.title}</h2>
                <p>{text.pages.home.aboutUs.story.description}</p>
            </div>

            <div className={style.aboutUsBlock}>
                <h2>{text.pages.home.aboutUs.mission.title}</h2>
                <p>{text.pages.home.aboutUs.mission.description}</p>
            </div>
            <div className={style.aboutUsBlock}>
                <h2>{text.pages.home.aboutUs.vission.title}</h2>
                <p>{text.pages.home.aboutUs.vission.description}</p>
            </div>


        </div>
    </section>)
}