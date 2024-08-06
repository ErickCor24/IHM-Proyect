import './Delete.css'
export function Delete (){
    return(
        <section className="matriculacion-box">
            <h2 className='tittle-matriculacion'>Anular Matricula del estudiante</h2>
            <div className='form-busqueda' action="">
                <span className='span-matriculacion ci-estudiante'>Ci estudiante: </span>
                <input className='input-ci-matriculacion input-matriculacion' type="" placeholder='Cedula del estudiante'/>
                <button className='btn-matricular btn-buscar-cedula'>Buscar</button>
            </div>
            
            <span className='span-matriculacion datos-estudiante'>Datos</span>
            <section className='box-datos-delete'>
                <span>Nombres:</span>
                <span>Apellidos:</span>
                <span>Semestre Actual:</span>
                <span>Correo:</span>
                <span>Direccion:</span>
            </section>

            <div className='form-datos' action="">
                <button className='btn-matricular btn-registrar'>Anular</button>
            </div>
        </section>
    )
}