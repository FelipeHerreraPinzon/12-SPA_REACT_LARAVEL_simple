import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/empleado'
const CrearEmpleado = () => {

    const [nombre, setNombre] = useState('')
    const [celular, setCelular] = useState('')
    const [correo, setCorreo] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {nombre: nombre, celular: celular, correo: correo})
            
            navigate("/")
          

    }
  return (
    <div>
        <h2>Crear Nuevo Empleado</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre} 
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Celular</label>
                <input 
                    value={celular} 
                    onChange={ (e)=> setCelular(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Correo</label>
                <input 
                    value={correo} 
                    onChange={ (e)=> setCorreo(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            

            <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
    </div>
  )
}

export default CrearEmpleado
