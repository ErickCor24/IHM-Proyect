import { Layout } from '../LayoutProfesor/Layout.jsx'
import {Routes, Route } from 'react-router-dom';
import { Matriculacion } from '../Content/Matriculacion.jsx';
import { Delete } from '../Content/Delete.jsx';
import { Update } from '../Content/Update.jsx';
import { ContentCourses } from '../ContentCourses/ContentCourses.jsx';
import { UpdateGrade } from '../ContentCourses/UpdateGrade.jsx';

export function RedirectDocente (){
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/Curso5-2' element = {<ContentCourses course='Curso 5-2'/>}/>
                    <Route path='/Curso5-3' element = {<ContentCourses course='Curso 5-3'/>}/>
                    <Route path='/Curso5-6' element = {<ContentCourses course='Curso 5-6'/>}/>
                    <Route path='/Notas' element = {<UpdateGrade/>}/>
                </Routes>
            </Layout>
        </>
    )
 }