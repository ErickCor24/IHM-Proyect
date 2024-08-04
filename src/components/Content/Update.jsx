import './Update.css'

export function Update (){
    return(
        <section className="matriculacion-box">
            <h2 className='tittle-matriculacion'>Cambiar curso estudiante</h2>
            <form className='form-busqueda' action="">
                <span className='span-matriculacion ci-estudiante'>Ci estudiante: </span>
                <input className='input-ci-matriculacion input-matriculacion' type="" placeholder='Cedula del estudiante'/>
                <button className='btn-matricular btn-buscar-cedula'>Buscar</button>
            </form>
            
            <span className='span-matriculacion datos-estudiante'>Datos</span>
            <section className='box-datos'>
                <span>Nombres:</span>
                <span>Apellidos:</span>
                <span>Semestre Actual:</span>
                <span>Correo:</span>
                <span>Direccion:</span>
            </section>

            <form className='form-datos' action="">
            <span className='subtittle-curso'>Curso</span>
                <select className='input-curso-matriculacion input-matriculacion' name="" id="">
                    <option className='option' value="curso1" defaultChecked> Seleccione el curso... </option>
                    <option className='option' value="curso1"> Curso 5-1 </option>
                    <option className='option' value="curso1"> Curso 5-3 </option>
                    <option className='option' value="curso1"> Curso 5-4 </option>
                    <option className='option' value="curso1"> Curso 5-4 </option>
                </select>
                <button className='btn-matricular btn-registrar'>Actualizar</button>
            </form>
        </section>
    )
}