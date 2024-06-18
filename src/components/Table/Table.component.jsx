import React, { useEffect } from 'react'
import RowComponent from './RowTable.component.jsx'
import HeadTableComponent from './HeadTable.component.jsx'
import LoadingTableComponent from './LoadingTable.component.jsx'

function TableComponent({ table }) {

  return (
    <>
      {
        table.data.length === 0 ? (
          <LoadingTableComponent />
        ) : (
          <table>
            <tbody>
              <HeadTableComponent headerData={table?.header} />
              <RowComponent dataTable={table?.data} propsToShow={table?.propiertiesToShow} />
            </tbody>
          </table>
        )
      }
    </>

  )
}

export default TableComponent