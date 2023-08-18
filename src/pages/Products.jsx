import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"

export const Products = ()=>{
    const text = useLabelsContext()

    return <div>
        <Layout title={text.title.products}>
                <h1>{text.nav.products}</h1>
        </Layout>
    </div>
}