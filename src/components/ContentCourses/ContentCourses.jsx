import './ContentCourses.css';
export function ContentCourses ({course}) {
    return (
        <>
            <div className='content'>
                <h1>{course}</h1>
                <h2>Estudiantes</h2>
                <div className='content-table'>
                    <table className='table-notas'>
                        <tr className='table-head'>
                            <th>Estudiante</th>
                            <th>G.Formativa</th>
                            <th>G.Práctica</th>
                            <th>Acre. y Val.</th>
                        </tr>
                        <tr className='table-row'>
                            <td>Daniel Mateo Aguilar Villafuerte</td>
                            <td>9</td>
                            <td>9.5</td>
                            <td>10</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Camillie Thais Ayovi Villafuerte</td>
                            <td>10</td>
                            <td>9.5</td>
                            <td>10</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Erick Alejandro Cordova Viteri</td>
                            <td>10</td>
                            <td>10</td>
                            <td>9.5</td>
                        </tr>
                        <tr className='table-row'>
                            <td>Cesar Alexander Tipan Anton</td>
                            <td>10</td>
                            <td>9.5</td>
                            <td>9.9</td>
                        </tr>
                    </table>
                </div>
                <div className='content-button'>
                        <button className='button-con'> Registrar</button>
                </div>
            </div>
        </>
    )
}