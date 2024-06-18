import './App.css'
import HeaderComponent from './components/pages/components/Header.component.jsx'
import TableComponent from './components/Table/Table.component.jsx'
import { TableClient, TableAgency } from './logic/Tables.logic.js'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNameTable, addTableData } from './redux/tableSlice.js'
import { useEffect } from 'react'
import { db } from './firebase/config.js'
import LoadingComponent from './components/Table/LoadingTable.component.jsx'


function App() {

  const { nombreEmpresa } = useParams();
  const titleTable = "Postulante Lucas Rodrigues"

  //toma los datos del contexto
  const { table } = useSelector((state) => state.table)

  const dispatch = useDispatch()


  const getTableData = async () => {
    const colname = "empresas";

    const fireData = await loadDataTableFirebase(colname)
    let dataResult = []

    if (nombreEmpresa) {
      dataResult = TableClient(nombreEmpresa, fireData)
    } else {
      dataResult = TableAgency(fireData)
    }

    return {
      nombreEmpresa: nombreEmpresa,
      dataResult: dataResult
    }

  }

  useEffect(() => {
    let add = true;
    const fetchData = async () => {
      const { nombreEmpresa, dataResult } = await getTableData()
      if (add) {
        dispatch(addNameTable(nombreEmpresa))
        dispatch(addTableData(dataResult))
      }
    }
    fetchData()
    return () => {
      add = false;
    }
  }, [])

  return (
    <>
      <main>
        <h1>DESAFIO TECNICO HEYANDRES</h1>
        <article className='TableContainer'>

          <HeaderComponent title={titleTable} />
          {
            table.data.length === 0 ? (
              <LoadingComponent />
            ) : (
              <TableComponent />
            )
          }
        </article>
      </main>
    </>
  )
}

export default App
