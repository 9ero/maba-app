import { useLabelsContext } from "../components/LanguageProvider"
import { Layout } from "../components/Layout"
import { ProductsList } from "../components/products/ProducstList"

export const Products = ()=>{
    const text = useLabelsContext()

    return <div>
        <Layout title={text.title.products}>
                <ProductsList />
        </Layout>
    </div>
}