import React from 'react'
import { Link } from 'react-router-dom'

export function SideBar (){
    return(
        <>
            <Link to="/matriculacion">Matriculación</Link>
            <Link to="/vista">Vista</Link>
        </>
    )
}