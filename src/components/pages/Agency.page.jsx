import React from 'react'
import TableComponent from '../Table/Table.component'
import HeaderComponent from './components/Header.component'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTableAgency } from '../../redux/tableSlice.js'
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
      const dataResult = await getTableData()
      if (add) {
        dispatch(addTableAgency(dataResult))
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