import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addSortBy } from '../redux/tableSlice'

function HeaderComponent({ title }) {

    const { nameTable } = useSelector((state) => state.table)
    const dispatch = useDispatch()
    
    const handleChange = (value) => {
        dispatch(addSortBy(value))
    }

    return (
        <header>
            <nav>
                <div>
                    <h2>{title}</h2>
                    <h3><a href="/empresas">/empresas</a> /{nameTable}</h3>
                    <div>
                        <select onChange={(e) => handleChange(e.target.value)}>
                            <option value="Default" > default </option>
                            <option value="Alfabetico"> Alfabetico </option>
                            <option value="Ventas">ventas</option>
                        </select>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </nav >
        </header >
    )
}

export default HeaderComponent