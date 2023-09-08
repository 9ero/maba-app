import { Header } from "./Header"
import { Footer } from "./Footer"
import style from './Layout.module.css'

export const Layout = ({ title, children }) => {
	document.title = title
    
	return (
		<body className={style.appContainer}>
			
			
                <Header />
				<div className={style.container}>{children}</div>
				<Footer/>
			
		</body>
	)
}