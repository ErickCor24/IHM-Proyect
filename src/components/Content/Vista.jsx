import './Vista.css'
import { Link } from 'react-router-dom'

export function Vista (){
    return(
        <section  className="matriculacion-box">
            <h1 className='tittle-matriculacion'>Cursos y cupos disponibles</h1>
            
            <div className='box-datos-vista'>
                <table className='table-vista-secretaria'>
                    <thead>
                        <th>Cursos</th>
                        <th>Docente</th>
                        <th>Disponibilidad</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SOF-S-MA-5-1</td>
                            <td>Ing. Wilson Merino Montoya</td>
                            <td>12/50</td>
                        </tr>
                        <tr>
                            <td>SOF-S-MA-5-3</td>
                            <td>Ing. Camillie Ayovi Cifuentes</td>
                            <td>10/50</td>
                        </tr>
                        <tr>
                            <td>SOF-S-MA-5-4</td>
                            <td>Eco. Ronaldo Lozano Cordova</td>
                            <td>14/50</td>
                        </tr>
                        <tr>
                            <td>SOF-S-MA-5-6</td>
                            <td>Mgs. Daniel Aguilar Caicedo</td>
                            <td>17/50</td>
                        </tr>
                        <tr>
                            <td>SOF-S-MA-5-9</td>
                            <td>Mgs. Jamileth Moran Moran</td>
                            <td>25/50</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <Link className='link-home-secretaria' to="/secretaria"><button className='btn-home-secretaria' onSubmit={handleDoNothing}>Regresar a Inicio</button></Link>

        </section>
    )
}