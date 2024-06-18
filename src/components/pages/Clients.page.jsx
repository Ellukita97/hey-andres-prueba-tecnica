import React from 'react'
import TableComponent from '../Table/Table.component'
import HeaderComponent from './components/Header.component'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addTableClient, addNameTable } from '../../redux/tableSlice.js'
import { loadDataTableFirebase } from '../../services/FireBase.service'
import { TableClientLogic } from '../../logic/Tables.logic.js'

function ClientsPage() {

    const { nameAgencyParams } = useParams();
    const { tableClient } = useSelector((state) => state.table)
    const dispatch = useDispatch()

    const getTableData = async () => {
        const colname = "empresas";
        const fireData = await loadDataTableFirebase(colname)
        return TableClientLogic(nameAgencyParams, fireData)
    }

    useEffect(() => {
        let add = true;
        const fetchData = async () => {
            const dataResult = await getTableData()
            if (add) {
                dispatch(addTableClient(dataResult))
                dispatch(addNameTable(nameAgencyParams))
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
                <TableComponent table={tableClient} />
            </div>
        </article>
    )
}

export default ClientsPage