import React from "react"
import { Header } from "./Header.jsx"
import { SideBar } from "./SideBar.jsx"

export function Layout ({children}) {
    return(
        <>   
            <Header/>
            <SideBar/>           
            {children}
        </>
    )
}