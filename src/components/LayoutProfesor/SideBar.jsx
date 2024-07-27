import React from 'react'
import './SideBar.css'

export function SideBar ({children}){
    return(
        <>
            <section class="section content-modules">
                {children}     
            </section>
        </>
    )
}