import React from 'react'

function RowComponent({ dataTable }) {
    return (
        <>
            {dataTable?.map((value, key) => {
                return (
                    <tr key={key}>
                        {
                            value.map((v, k) => {
                                return (
                                    <td key={k}>{
                                        v == "detalle"
                                            ? (<a href={`/empresas/${dataTable[key][0]}`}>detalle</a>)
                                            : v

                                    }</td>
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