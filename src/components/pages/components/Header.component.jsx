import React from 'react'
import './Header.style.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addSortBy } from '../../../redux/tableSlice'
import SquereComponent from './Squere.component'

function HeaderComponent({ title }) {

    const { nameTable, bestMonth, agencyMostSales } = useSelector((state) => state.table)
    const dispatch = useDispatch()

    const handleChange = (value) => {
        dispatch(addSortBy(value))
    }

    return (
        <>
            <div>
                <div className='headerPageContainer'>
                    <div className='titleContainer_headerPage'>
                        <h2>{title}</h2>
                    </div>
                    <div className='squereContainer'>
                        {
                            bestMonth ? (
                                <SquereComponent title="MAYOR GANANCIA DE UNA EMPRESA"  text={ '$' + bestMonth} />
                            ) : ""
                        }
                        {
                            agencyMostSales ? (
                                <SquereComponent title='MES CON MAS CANTIDAD DE VENTAS' text={agencyMostSales} />
                            ) : ""
                        }

                    </div>
                </div >
                <h3><a href="/">empresas</a> /{nameTable}</h3>
            </div>
            <div>
                <select className='select_headerPage' onChange={(e) => handleChange(e.target.value)}>
                    <option value="Default" > default </option>
                    <option value="Alfabetico"> Alfabetico </option>
                    <option value="Ventas">ventas</option>
                </select>
            </div>
        </>
    )
}

export default HeaderComponent