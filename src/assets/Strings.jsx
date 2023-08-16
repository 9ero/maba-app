export const Strings = (lang) => {


    const text = {
        nav: {
            home: lang == 'spa' ? 'Inicio' : lang == 'eng' ? 'Home' : 'Home',
            about: lang == 'spa' ? 'Nosotros' : lang == 'eng' ? 'About us' : 'About us',
            products: lang == 'spa' ? 'Productos' : lang == 'eng' ? 'Products' : 'Products',
            contact: lang == 'spa' ? 'Contacto' : lang == 'eng' ? 'Contact' : 'Contact',
            elements: {
                mision: lang == 'spa' ? 'Mision' : lang == 'eng' ? 'Mission' : 'Mission',
                vision: lang == 'spa' ? 'Vision' : lang == 'eng' ? 'Vission' : 'Contact',
            }
        },
        

    }
    return text
}


