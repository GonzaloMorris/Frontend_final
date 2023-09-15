import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'


const Detail = () => {
const { Theme } = useContext(ContextGlobal)

    const params = useParams()
    const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
    const [dentistDetail, setDentistDetail] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setDentistDetail(res.data))
        .catch(err => console.log(err))
})


return (
    <div className='detail' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Datos del Dentista{dentistDetail.id} </h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Pagina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dentistDetail.nombre}</td>
                        <td>{dentistDetail.email}</td>
                        <td>{dentistDetail.telefono}</td>
                        <td>{dentistDetail.pagina}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
)
}

export default Detail