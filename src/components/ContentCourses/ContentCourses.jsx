import { Link } from 'react-router-dom';
import './ContentCourses.css';
import { handleDoNothing } from '../../App';

export function ContentCourses ({course}) {
    const formattedCourse = course.replace(/\s+/g, '');
    return (
        <>
            <div className='content'>
                <h1>{course}</h1>
                <h2>Estudiantes</h2>
                <div className='content-table'>
                    <table className='table-notas'>
                        <tr className='table-head'>
                            <th className='first-column'>Estudiante</th>
                            <th className='second-column'>G.Formativa</th>
                            <th className='third-column'>G.Práctica</th>
                            <th className='fourth-column'>Acre. y Val.</th>
                        </tr>
                        <tr className='table-row'>
                            <td className='first-column'>Daniel Mateo Aguilar Villafuerte</td>
                            <td className='second-column'>9</td>
                            <td className='third-column'>9.5</td>
                            <td className='fourth-column'>10</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='first-column'>Camillie Thais Ayovi Villafuerte</td>
                            <td className='second-column'>10</td>
                            <td className='third-column'>9.5</td>
                            <td className='fourth-column'>10</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='first-column'>Erick Alejandro Cordova Viteri</td>
                            <td className='second-column'>10</td>
                            <td className='third-column'>10</td>
                            <td className='fourth-column'>9.5</td>
                        </tr>
                        <tr className='table-row'>
                            <td className='first-column'>Cesar Alexander Tipan Anton</td>
                            <td className='second-column'>10</td>
                            <td className='third-column'>9.5</td>
                            <td className='fourth-column'>9.9</td>
                        </tr>
                    </table>
                </div>
                <div className='content-button'>
                    <Link to='./Registrar' ><button className='button-con'> Registrar</button></Link>

                </div>
            </div>
        </>
    )
}