import React, { useEffect } from 'react'
import RowComponent from './RowTable.component.jsx'
import HeadTableComponent from './HeadTable.component.jsx'
import { useSelector } from 'react-redux'

function TableComponent() {

  //toma los datos del contexto
  const {table} = useSelector((state) => state.table)

  return (
    <table>
      <tbody>
        <HeadTableComponent headerData={table?.header} />
        <RowComponent dataTable={table?.data} propsToShow={table?.propiertiesToShow} />
      </tbody>
    </table>
  )
}

export default TableComponent