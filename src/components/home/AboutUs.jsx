import style from './AboutUs.module.scss'
import fronImage from './../../assets/front.webp'



export const AboutUs = ()=>{

    return <div className={style.aboutUs} id='AboutUs'>
            <div className={style.aboutUsBlock}>
                <h2>Our Story</h2>
                <p>En esta ocasión veremos una breve historia de como se originó la empresa y como fue evolucionando con el paso del tiempo. Con la finalidad de conocer su origen, a continuación se presenta de manera muy simplificada una breve descripción de la evolución de la empresa a lo largo de la historia.</p>
            </div>
            <img src={fronImage} alt='Front img' className={style.aboutUsBlock} />
            <div className={style.aboutUsBlock}>
                <h2>Mission</h2>
                <p>Nuestra misión como organización empresarial líder en el mercado de exportación de tubérculos es proporcionar productos frescos y congelados de la más alta calidad a nuestros clientes, a través de un enfoque centrado en su satisfacción. Nuestro compromiso es ganarnos la confianza y fidelidad de nuestros consumidores mediante la entrega de un valor agregado y una atención cercana y personalizada. Para lograrlo, contamos con la tecnología más avanzada y un equipo humano altamente capacitado y comprometido con nuestros valores corporativos, incluyendo la preservación del medio ambiente y la contribución al desarrollo de la sociedad.</p>
            </div>
            <div className={style.aboutUsBlock}>
                <h2>Vision</h2>
                <p>Nuestra visión es convertirnos en una empresa líder, reconocida por nuestra competitividad, innovación y excelencia en productos y servicios. Nos esforzamos por ser la opción preferida del consumidor, tanto en el mercado nacional como internacional, y contribuir así al desarrollo de la industria. Buscamos alcanzar la sostenibilidad a largo plazo de nuestra organización, cumpliendo siempre con los más altos estándares de calidad y productividad. Nos comprometemos a satisfacer de manera eficaz y eficiente las necesidades de nuestros clientes, en armonía con nuestra visión de crecimiento y liderazgo en el mercado global.</p>
            </div>
           
        
    </div>
}