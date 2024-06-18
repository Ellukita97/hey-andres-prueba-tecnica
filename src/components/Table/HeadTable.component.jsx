import React from 'react'

function HeadTableComponent({ headerData }) {
    return (
        <tr className='headTable'>
            {
                headerData?.map((h, k) => {
                    return (
                        <th key={k}>{h}</th>
                    )
                })
            }
        </tr>
    )
}

export default HeadTableComponent