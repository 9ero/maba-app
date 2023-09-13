import { Header } from "./Header"
import { Footer } from "./Footer"
import style from './Layout.module.css'

export const Layout = ({ title, children }) => {
	document.title = title
    
	return (
		<>
			
			
                <Header />
				<main className={style.container}>{children}</main>
				<Footer/>
			
		</>
	)
}