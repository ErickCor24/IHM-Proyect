import myUser from '../images/user.svg'
import home from '../images/home.svg'
import './AsideContent.css'
import { Link } from 'react-router-dom'

export function SideRequeriments(){
    return(
        <>
            <User/>
            <Options/>    
        </>
    )
}

function Options () {
    return(
        <>
        <div className='gestions'>
            <section className='section-gestions estudiantes-section'>
                    <h2 className='title tittle-estudiante'>Gestion Estudiantes</h2>
                    <div className='gestion-list'>
                        <Link className='link borrar-estudiante' to="/Delete"><button> Anular matricula</button></Link>
                        <Link className='link matricular-estudiante' to="/Matriculacion"><button> Matricular estudiante</button></Link>
                        <Link className='link actualizar-estudiante' to="/Update"><button> Cambiar curso estudiante</button></Link>
                    </div>
                </section>

                
                <section className='section-gestions cursos-section'>
                    <h2 className='title tittle-Cursos'>Gestion de Cursos</h2>
                    <div className='gestion-list'>
                        <Link className='link ver-cursos' to=""> <button>Visualizar cupos y cursos</button></Link>
                    </div>    
                </section>
        </div>           
        </>
    )
}

function User () {
    return (
        <>   
        <div className='user-section'>
            <img className='user-img' src={myUser} alt="Usuario" />
            <label className='label-user'>Secretaria</label>
        </div>
        <div className='div-btn'>
            <button className='btn-home'>
                <img className='home-img' src={home} alt="" />
            </button>
        </div>
    </>
    )
}