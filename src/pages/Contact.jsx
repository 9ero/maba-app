import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"

export const Contact = ()=>{
    const text = useLabelsContext()
    return(
        <Layout title={text.title.contact}>
            <h1>{text.nav.contact}</h1>
        </Layout>
    )
}