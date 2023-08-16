import { useActionData } from "react-router-dom"
import { Header } from "./Header"
import { useEffect } from "react"

export const Layout = ({ title, children }) => {
	
    useEffect(()=>{
        document.title = title;
    }, [])

	return (
		<>
			
			
                <Header/>
				<div>{children}</div>
			
		</>
	)
}