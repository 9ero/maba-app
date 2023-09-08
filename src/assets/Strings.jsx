export const Strings = (lang) => {

    const companyName = 'MABA AgroExport'
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
        }



    }
    return text
}


