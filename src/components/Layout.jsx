import { Header } from "./Header"
import { useEffect } from "react"
import { Footer } from "./Footer"
import style from './Layout.module.css'

export const Layout = ({ title, children }) => {
	document.title = title
    useEffect(()=>{
        
    }, [])

	return (
		<>
			
			
                <Header/>
				<div className={style.container}>{children}</div>
				<Footer/>
			
		</>
	)
}