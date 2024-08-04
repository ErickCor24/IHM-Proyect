import './Home.css'
import { Link } from 'react-router-dom'
export function HomeDocente () {
    return(
        <>
            <section className='home-section'>
            <h1>Bienvenido Luis Suarez</h1>
            
            <div className='cards-section'>

                <Link  to='/Docente/Curso5-2' className='link-card card card-secretaria'>
                        <div className='card-img-bg five'/>
                        <label className='label-home'>Curso 5-2</label>
                </Link>

                <Link to='/Docente/Curso5-3' className='link-card card card-secretaria'>
                        <div className='card-img-bg  six'/>
                        <label className='label-home'>Curso 5-3</label>
                </Link>

                <Link to='/Docente/Curso5-6' className='link-card card card-secretaria'>
                    <div className='card-img-bg seven'/>
                    <label className='label-home'>Curso 5-6</label>
                </Link>

                <Link to='/Docente/ActualizarNotas' className='link-card card card-secretaria'>
                    <div className='card-img-bg eight'/>
                    <label className='label-home'>Actualizar notas</label>
                </Link>                
            </div>
        </section>
        </>
    )
}


export function HomeSecretaria () {
    return(
        <section className='home-section'>
            <h1>Bienvenida Monica Mendoza</h1>
            
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
