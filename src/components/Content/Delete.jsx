import './Delete.css'
export function Delete (){
    return(
        <section className="matriculacion-box">
            <h2 className='tittle-matriculacion'>Anular Matricula del estudiante</h2>
            <form className='form-busqueda' onSubmit={handleDoNothing}>
                <span className='span-matriculacion ci-estudiante'>Ci estudiante: </span>
                <input className='input-ci-matriculacion input-matriculacion' type="" placeholder='Cedula del estudiante'/>
                <button className='btn-matricular btn-buscar-cedula'>Buscar</button>
            </form>
            
            <span className='span-matriculacion datos-estudiante'>Datos</span>
            <section className='box-datos-delete'>
                <span>Nombres:</span>
                <span>Apellidos:</span>
                <span>Semestre Actual:</span>
                <span>Correo:</span>
                <span>Direccion:</span>
            </section>

            <form className='form-datos' onSubmit={handleDoNothing}>
                <button className='btn-matricular btn-registrar'>Anular</button>
            </form>
        </section>
    )
}