import './Home.css'
import { Link } from 'react-router-dom'
export function HomeDocente () {
    return(
        <>
            <h1>Bienvenido Luis Suarez</h1>
        </>
    )
}


export function HomeSecretaria () {
    return(
        <section className='home-section'>
            <h1>Bienvenido Monica Mendoza</h1>
            
            <div className='cards-section'>
                <Link  to='./Matriculacion' className='link-card card card-secretaria'>
                        <div className='card-img-bg one'/>
                        <label className='label-home'> Matriculacion estudiante</label>
                </Link>

                <Link to='./Update' className='link-card card card-secretaria'>
                        <div className='card-img-bg  two'/>
                        <label className='label-home'>Cambiar curso estudiante</label>
                </Link>

                <Link to='./Delete' className='link-card card card-secretaria'>
                    <div className='card-img-bg three'/>
                    <label className='label-home'>Anular matricula</label>
                </Link>

                <Link to='./Vista' className='link-card card card-secretaria'>
                    <div className='card-img-bg four'/>
                    <label className='label-home'>Visualizar cupos y cursos</label>
                </Link>                
            </div>
        </section>
    )
}
