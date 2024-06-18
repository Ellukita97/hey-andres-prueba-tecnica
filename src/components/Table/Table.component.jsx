import React, { useEffect, useState } from 'react'
import RowComponent from './RowTable.component.jsx'
import HeadTableComponent from './HeadTable.component.jsx'
function TableComponent({ table, propsToShow }) {

  const [dataTable, setDataTable] = useState({
    header: [],
    data: [],
    propiertiesToShow: []
  })

  useEffect(() => {
    setDataTable(table)
  }, [table])

  return (
    <table>
      <tbody>
        <HeadTableComponent headerData={dataTable.header} />
        <RowComponent dataTable={dataTable.data} propsToShow={dataTable.propiertiesToShow} />
      </tbody>
    </table>
  )
}

export default TableComponent