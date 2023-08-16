import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"

export const Home = ()=>{
    const text = useLabelsContext()

    return <div>
        <Layout title="Agroindustria MABA">
                <h1>{text.nav.home}</h1>
        </Layout>
    </div>
}