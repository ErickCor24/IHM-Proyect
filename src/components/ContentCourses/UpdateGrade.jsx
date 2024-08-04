import './UpdateGrade.css'
export function UpdateGrade () {
    return (
        <>
            <div className="content">
                <h1>Actualizar notas estudiante</h1>
                <div className="content-busq">
                    <h3>Curso: </h3>
                    <select className="busq-cursos">
                        <option className="option-curso">Curso 5-2</option>
                        <option className="option-curso">Curso 5-3</option>
                        <option className="option-curso">Curso 5-6</option>
                    </select>
                </div>
                <div className="content-busq">
                    <h3>CI Estudiante: </h3>
                    <input className='input-ci' type='text' placeholder='Ingrese CI del estudiante'></input>
                </div>
                <div className='content-table'>
                <table className='table-notas'>
                        <tr className='table-head'>
                            <th className='first-column'>Estudiante</th>
                            <th className='second-column'>G.Formativa</th>
                            <th className='third-column'>G.Práctica</th>
                            <th className='fourth-column'>Acre. y Val.</th>
                        </tr>
                        <tr className='table-row'>
                            <td className='first-column'>Erick Alejandro Cordova Viteri</td>
                            <td><input className='second-column' placeholder='9'></input></td>
                            <td><input className='thrid-column' placeholder='10'></input></td>
                            <td><input className='fourth-column' placeholder='8'></input></td>
                        </tr>
                </table>
                </div>
                <div className='content-button'>
                        <button className='button-con'> Actualizar</button>
                </div>
            </div>
        </>
    )
}