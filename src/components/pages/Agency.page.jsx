import React from 'react'
import TableComponent from '../Table/Table.component'
import HeaderComponent from './components/Header.component'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTableAgency, addBestMonth, addAgencyMostSales } from '../../redux/tableSlice.js'
import { loadDataTableFirebase } from '../../services/FireBase.service'
import { TableAgencyLogic } from '../../logic/Tables.logic.js'

function AgencyPage() {

  const { tableAgency } = useSelector((state) => state.table)
  const dispatch = useDispatch()

  const getTableData = async () => {
    const colname = "empresas";
    const fireData = await loadDataTableFirebase(colname)
    return TableAgencyLogic(fireData)

  }

  useEffect(() => {
    let add = true;
    const fetchData = async () => {
      const { header, data, propiertiesToShow, monthMoreSales, maxSalesAgency } = await getTableData()
      const dataToSend = { header, data, propiertiesToShow }
      if (add) {
        dispatch(addTableAgency(dataToSend))
        dispatch(addBestMonth(monthMoreSales))
        dispatch(addAgencyMostSales(maxSalesAgency))
      }
    }
    fetchData()
    return () => {
      add = false;
    }
  }, [])

  return (
    <article>
      <h1>DESAFIO TECNICO HEYANDRES</h1>
      <div className='TableContainer'>
        <HeaderComponent title={"Postulante Lucas Rodrigues"} />
        <TableComponent table={tableAgency} />
      </div>
    </article>
  )
}

export default AgencyPage