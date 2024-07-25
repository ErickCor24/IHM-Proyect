import React from "react"
import './Layout.css'
import { Header } from "./Header.jsx"
import { SideBar } from "./SideBar.jsx"
import { SideRequeriments } from "../AsideContent/AsideContent.jsx"

export function Layout ({children}) {
    return(
        <>   
            <SideBar>
                <SideRequeriments/>
            </SideBar>      
            <div class="section right-section">
                <Header/> 
                <section class="section content-section">
                    {children}
                </section>
            </div>
        </>
    )
}