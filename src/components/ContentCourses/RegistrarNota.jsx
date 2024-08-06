import './RegistrarNota.css'
import { handleDoNothing } from '../../App';

export function RegistrarNota() {
  return (
      <div className="content">     
                <h1>Registrar notas estudiante</h1>
                <div className="content-busq">
                    <h3>CI Estudiante: </h3>
                    <input className='input-ci input-matriculacion' type='text' placeholder='Ingrese CI del estudiante'></input>
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
                            <td className='first-column'>Jimmy Josue Paez Velasco</td>
                            <td><input className='second-column' placeholder='0'></input></td>
                            <td><input className='thrid-column' placeholder='0'></input></td>
                            <td><input className='fourth-column' placeholder='0'></input></td>
                        </tr>
                </table>
                </div>
                <div className='content-button'>
                        <button className='button-con' onSubmit={handleDoNothing}> Registrar</button>
                </div>
            </div>
  )
}

