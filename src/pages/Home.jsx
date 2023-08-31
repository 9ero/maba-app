import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"
import { AboutUs } from "../components/home/AboutUs"
import { MainSection } from "../components/home/MainSection"



export const Home = ()=>{
    const text = useLabelsContext()

    return (
        <Layout title={text.title.home}>
              <MainSection/>
              <AboutUs/>
        </Layout>
    )
}