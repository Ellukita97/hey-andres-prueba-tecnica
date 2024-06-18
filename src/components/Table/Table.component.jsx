import React, { useEffect, useState } from 'react'
import RowComponent from './RowTable.component.jsx'
import HeadTableComponent from './HeadTable.component.jsx'
function TableComponent({table}) {

  const [dataTable, setDataTable] = useState({
    header: [],
    data: []
  })

  useEffect(() => {
    setDataTable(table)
  }, [table])

  return (
    <table>
      <tbody>
        <HeadTableComponent headerData={dataTable.header} />
        <RowComponent dataTable={dataTable.data} />
      </tbody>
    </table>
  )
}

export default TableComponent