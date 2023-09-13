export const Strings = (lang) => {

    const companyName = 'MABA Agroexport'
    const mainSectionDescSpa = 'Descubre la auténtica yuca costarricense de MABA Agroexport. Producida en el corazón de San Carlos, nuestra yuca es sinónimo de frescura y calidad. ¡Lleva el sabor de Costa Rica a tu hogar con cada bocado! Explora nuestra gama de tubérculos y disfruta de la diferencia que solo MABA Agroexport puede ofrecer.'
    const mainSectionDescEng = 'Discover the authentic Costa Rican yuca from MABA Agroexport. Produced in the heart of San Carlos, our yuca is synonymous with freshness and quality. Bring the taste of Costa Rica to your home with every bite! Explore our range of tubers and savor the difference that only MABA Agroexport can offer.'
    const storyDescEsp = 'MABA Agroexport nace en la comunidad de Chachagua en el año 1993 como una empresa familiar agroindustrial dirigida por su fundador y actual dueño Don Jesus Maria Mata Elizondo. La empresa MABA Agroexport esta especializada en la producción y procesamiento de raíces y tubérculos para la comercialización tanto nacional como internacional, la empresa se enfoca un 90% en comercio internacional y un 10% en mercado nacional y supermercados.'
    const storyDescEng = 'MABA Agroexport was founded in the Chachagua community in 1993 as a family-owned agro-industrial company led by its founder and current owner, Mr. Jesus Maria Mata Elizondo. The company, MABA Agroexport, specializes in the production and processing of roots and tubers for both domestic and international markets, with a focus on 90% international trade and 10% domestic and supermarket sales.'
    const missionDescEsp = 'Nuestra misión como organización empresarial líder en el mercado de exportación de tubérculos es proporcionar productos frescos y congelados de la más alta calidad a nuestros clientes, a través de un enfoque centrado en su satisfacción. Nuestro compromiso es ganarnos la confianza y fidelidad de nuestros consumidores mediante la entrega de un valor agregado y una atención cercana y personalizada. Para lograrlo, contamos con la tecnología más avanzada y un equipo humano altamente capacitado y comprometido con nuestros valores corporativos, incluyendo la preservación del medio ambiente y la contribución al desarrollo de la sociedad.'
    const missionDescEng = 'Our mission as a leading business organization in the tuber export market is to provide fresh and frozen products of the highest quality to our customers, through a customer-focused approach. Our commitment is to earn the trust and loyalty of our consumers by delivering added value and personalized attention. To achieve this, we rely on state-of-the-art technology and a highly trained and dedicated team that aligns with our corporate values, including environmental preservation and contributing to the development of society.'
    const vissionDescEsp = 'Nuestra visión es convertirnos en una empresa líder, reconocida por nuestra competitividad, innovación y excelencia en productos y servicios. Nos esforzamos por ser la opción preferida del consumidor, tanto en el mercado nacional como internacional, y contribuir así al desarrollo de la industria. Buscamos alcanzar la sostenibilidad a largo plazo de nuestra organización, cumpliendo siempre con los más altos estándares de calidad y productividad. Nos comprometemos a satisfacer de manera eficaz y eficiente las necesidades de nuestros clientes, en armonía con nuestra visión de crecimiento y liderazgo en el mercado global.'
    const vissionDescEng = 'Our vision is to become a leading company, recognized for our competitiveness, innovation, and excellence in products and services. We strive to be the preferred choice of consumers, both in the domestic and international markets, thereby contributing to the development of the industry. We aim to achieve the long-term sustainability of our organization, always meeting the highest standards of quality and productivity. We are committed to effectively and efficiently meeting the needs of our customers, in harmony with our vision of growth and leadership in the global market.'

    const text = {
        lang: lang,
        nav: {
            home: lang == 'spa' ? 'Inicio' : lang == 'eng' ? 'Home' : 'Home',
            about: lang == 'spa' ? 'Nosotros' : lang == 'eng' ? 'About us' : 'About us',
            products: lang == 'spa' ? 'Productos' : lang == 'eng' ? 'Products' : 'Products',
            contact: lang == 'spa' ? 'Contacto' : lang == 'eng' ? 'Contact' : 'Contact',
            elements: {
                mision: lang == 'spa' ? 'Misión' : lang == 'eng' ? 'Mission' : 'Mission',
                vision: lang == 'spa' ? 'Visión' : lang == 'eng' ? 'Vission' : 'Contact',
            }
        },
        title: {
            home: companyName,
            products: (lang == 'spa' ? 'Productos - ' : lang == 'eng' ? 'Products - ' : 'Products - ') + companyName,
            contact: (lang == 'spa' ? 'Contacto - ' : lang == 'eng' ? 'Contact - ' : 'Contact - ') + companyName,
        },
        footer: {
            email: 'empa.maba@gmail.com',
            phone: '+506 8394 4630',
            whatsapp: '+506 8506 2925',
            facebook: 'facebook.com/maba.agroexport',
            disclaimer: lang == 'spa' ? '©2023 MABA AgroExport Todos los derechos reservados. Desarrollado por Juan Fernandez' : lang == 'eng' ?
                '©2023 MABA AgroExport all rights reserved. Developed by Juan Fernandez' : '©2023 MABA AgroExport all rights reserved. Developed by Juan Fernandez',
        },
        pages: {
            home: {
                name: lang == 'spa' ? 'Inicio' : lang == 'eng' ? 'Home' : 'Home',
                mainSection: {
                    title: lang == 'spa' ? 'Yuca' : lang == 'eng' ? 'Cassava' : 'Cassava',
                    subTitle: lang == 'spa' ? 'Frescura de Costa Rica en Tu Mesa' : lang == 'eng' ? 'Costa Rican Freshness on Your Table.' : 'Costa Rican Freshness on Your Table.',
                    description: lang == 'spa' ? mainSectionDescSpa : lang == 'eng' ? mainSectionDescEng : mainSectionDescEng,
                    quote: lang == 'spa' ? 'Cotizar YA' : lang == 'eng' ? 'Quote NOW' : 'Quote NOW',
                    contact: lang == 'spa' ? 'Contáctanos' : lang == 'eng' ? 'Contact US' : 'Contact US',
                },
                aboutUs: {
                    titleHelper: lang == 'spa' ? 'Acerca de nosotros' : lang == 'eng' ? 'More abous us' : 'More about us',
                    story: {
                        title: lang == 'spa' ? 'Nuestra historia' : lang == 'eng' ? 'Our story' : 'Our Story',
                        description: lang == 'spa' ? storyDescEsp : lang == 'eng' ? storyDescEng : storyDescEng,
                    },
                    mission: {
                        title: lang == 'spa' ? 'Misión' : lang == 'eng' ? 'Mission' : 'Mission',
                        description: lang == 'spa' ? missionDescEsp : lang == 'eng' ? missionDescEng : missionDescEng,
                    },
                    vission: {
                        title: lang == 'spa' ? 'Visión' : lang == 'eng' ? 'Vission' : 'Vission',
                        description: lang == 'spa' ? vissionDescEsp : lang == 'eng' ? vissionDescEng : vissionDescEng,
                    },
                }
            },
            products: {
                productsList: {
                    yuca: {
                        name: lang == 'spa' ? 'Yuca' : lang == 'eng' ? 'Cassava' : 'Cassava',
                        sciName: '(Manihot esculenta)',
                    },
                    ayote: {
                        name: lang == 'spa' ? 'Ayote' : lang == 'eng' ? 'Curcubita Pumpkin' : 'Curcubita Pumpkin',
                        sciName: '(Cucurbita moschata)',
                    },
                    ayoteM: {
                        name: lang == 'spa' ? 'Ayote Mantequilla' : lang == 'eng' ? 'Cucurbita Butternut' : 'Cucurbita Butternut',
                        sciName: '(Cucurbita moschata butternut)',
                    },
                    nampi: {
                        name: lang == 'spa' ? 'Ñampi' : lang == 'eng' ? 'Eddoe' : 'Eddoe',
                        sciName: '(Colocasia antiquorum)',
                    },
                    tiquisque: {
                        name: lang == 'spa' ? 'Tiquisque' : lang == 'eng' ? 'Cocoyam' : 'Cocoyam',
                        sciName: '(Xanthonoma Sagittifolium)',
                    },
                    jengibre: {
                        name: lang == 'spa' ? 'Jengibre' : lang == 'eng' ? 'Ginger' : 'Ginger',
                        sciName: '(Zingiber officinale)',
                    },
                }
            }
        }



    }
    return text
}


