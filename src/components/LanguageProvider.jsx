import { createContext, useContext, useState } from "react";
import { Strings } from "./Strings";


const SwitchLanguageContext = createContext()
const LabelsContext = createContext()


export const useChangeLanguageContext = () => {
    return useContext(SwitchLanguageContext)
}

export const useLabelsContext = () => {
    return useContext(LabelsContext)
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('eng')
    const changeLanguage = (language) => {
        setLanguage(language)
    }
    const labels = Strings(language)

    return <SwitchLanguageContext.Provider value={changeLanguage}>
        <LabelsContext.Provider value={labels}>
            {children}
        </LabelsContext.Provider>
    </SwitchLanguageContext.Provider>

}