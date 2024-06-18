import React from 'react'

function RowComponent({ dataTable, propsToShow }) {
    
    return (
        <>
            {dataTable?.map((value, key) => {
                return (
                    <tr key={key}>
                        {
                            propsToShow?.map((prop, i) => {
                                return (
                                    <td key={i}>
                                        {
                                            prop == "detalle"
                                                ? (
                                                    <a href={`/empresas/${value.nameAgency}`}>Detalle</a>
                                                )
                                                : value[prop]
                                        }
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
            })}
        </>
    )
}

export default RowComponent