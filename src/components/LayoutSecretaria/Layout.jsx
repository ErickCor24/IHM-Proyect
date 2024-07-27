import React from "react"
import './Layout.css'
import { SideBar } from "./SideBar.jsx"
import { SideRequeriments } from "../AsideContent/AsideContent.jsx"

export function Layout ({children}) {
    return(
        <>   
            <SideBar>
                <SideRequeriments name='Secretaria' type = {false}/>
            </SideBar>      
            <div class="section right-section">
                <section class="section content-section">
                    {children}
                </section>
            </div>
        </>
    )
}