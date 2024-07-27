import myUser from '../images/user.svg'
import logout from '../images/logout.png'
import logo from '../images/logo.png'
import estudiantes from '../images/estudiantes.png'
import curso from '../images/curso.png'
import './AsideContent.css'
import { Link } from 'react-router-dom'

export function SideRequeriments({name, type}){
    return(
        <>
        {type ? (
            <>
                <User user={name} />
                <OptionsDocente />
                <Info />
            </>
        ) : (
            <>
                <User user={name} />
                <OptionsSecretaria />
                <Info />
            </>
        )}
    </>
    )
}

function OptionsDocente () {
    return(
        <>
        <div className='gestions'>
            <section className='section-gestions estudiantes-section'>
                <div className='head head-estudiantes'>
                    <img src={estudiantes} className='img img-estudiante' />
                    <h3 className='title tittle-estudiante'>Gestion Estudiantes</h3>
                </div>
                <div className='gestion-list'>
                    <Link className='link borrar-estudiante' to="/Docente"><button className='btn-options'>&#9658; Curso 5-2</button></Link>
                    <Link className='link matricular-estudiante' to="/Docente"><button className='btn-options'>&#9658; Curso 5-3</button></Link>
                    <Link className='link actualizar-estudiante' to="/Docente"><button className='btn-options'>&#9658; Curso 5-6</button></Link>
                </div>
            </section>
    
        </div>  
        </>
    )
}

function OptionsSecretaria () {
    return(
        <>
        <div className='gestions'>
            <section className='section-gestions estudiantes-section'>
                <div className='head head-estudiantes'>
                    <img src={estudiantes} className='img img-estudiante' />
                    <h3 className='title tittle-estudiante'>Gestion Estudiantes</h3>
                </div>

                <div className='gestion-list'>
                    <Link className='link borrar-estudiante' to="/Secretaria/Delete"><button className='btn-options'>&#9658; Anular matricula</button></Link>
                    <Link className='link matricular-estudiante' to="/Secretaria/Matriculacion"><button className='btn-options'>&#9658; Matricular estudiante</button></Link>
                    <Link className='link actualizar-estudiante' to="/Secretaria/Update"><button className='btn-options'>&#9658; Cambiar curso estudiante</button></Link>
                </div>
            </section>
    
            <section className='section-gestions cursos-section'>
                <div className='head head-curso'>
                    <img src={curso} className='img img-estudiante' />
                    <h3 className='title tittle-cursos'>Gestion de Cursos</h3>
                </div>
                <div className='gestion-list'>
                    <Link className='link ver-cursos' to="/Secretaria/Vista"> <button className='btn-options'>&#9658; Visualizar cupos y cursos</button></Link>
                </div>    
            </section>
        </div>           
        </>
    )
}

export function User ({user}) {
    return (
        <section className='user-info'>   
            <div className='user-section'>
                <img className='user-img' src={myUser} alt="Usuario" />
                <label className='label-user'>{user}</label>
            </div>
            <div className='div-btn'>
                <Link to="/">
                    <button className='btn-home'>
                        <img className='home-img' src={logout} alt="" /> 
                    </button>
                </Link>
            </div>
        </section>
    )
}

export function Info (){
    return(
        <div className='logo-div'>
            <img className='logo' src={logo} alt="logo universidad" />
        </div>
    )
}