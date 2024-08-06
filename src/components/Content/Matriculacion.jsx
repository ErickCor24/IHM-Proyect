import './Matriculacion.css';
import { handleDoNothing } from '../../';

export function Matriculacion() {

    return (
        <section className="matriculacion-box">
            <h2 className='tittle-matriculacion'>Matricular estudiante</h2>
            <form className='form-busqueda' onSubmit={handleDoNothing}>
                <span className='span-matriculacion ci-estudiante'>Ci estudiante: </span>
                <input className='input-ci-matriculacion input-matriculacion' type="text" placeholder='Cedula del estudiante'/>
                <button type="submit" className='btn-matricular btn-buscar-cedula'>Buscar</button>
            </form>
            
            <span className='span-matriculacion datos-estudiante'>Datos</span>
            <section className='box-datos'>
                <span>Nombres:</span>
                <span>Apellidos:</span>
                <span>Semestre Actual:</span>
                <span>Correo:</span>
                <span>Direccion:</span>
            </section>

            <form className='form-datos' onSubmit={handleDoNothing}>
                <span className='subtittle-curso'>Curso</span>
                <select className='input-curso-matriculacion input-matriculacion'>
                    <option className='option' value="" defaultChecked> Seleccione el curso... </option>
                    <option className='option' value="curso5-1"> Curso 5-1 </option>
                    <option className='option' value="curso5-3"> Curso 5-3 </option>
                    <option className='option' value="curso5-4"> Curso 5-4 </option>
                    <option className='option' value="curso5-6"> Curso 5-6 </option>
                </select>
                <button type="submit" className='btn-matricular btn-registrar'>Registrar</button>
            </form>
        </section>
    );
}
