import React from 'react'
import { useSelector } from 'react-redux'

function HeaderComponent({ title }) {

    const { nameTable } = useSelector((state) => state.table)

    return (
        <header>
            <nav>
                <div>
                    <h2>{title}</h2>
                    <h3><a href="/empresas">/empresas</a> /{nameTable}</h3>
                    <div>
                        <select>
                            <option value="default" selected> default </option>
                            <option value="Alfabetico"> Alfabetico </option>
                            <option value="ventas">ventas</option>
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