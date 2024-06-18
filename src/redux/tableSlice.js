import { createSlice } from "@reduxjs/toolkit";
import { sortArrDataString, sortArrDataNumber } from "../logic/filters.logic";

const initialState = {
    tableName: "",
    tableDefault: {
        header: [],
        data: [],
        propiertiesToShow: []
    },
    tableClient: {
        header: [],
        data: [],
        propiertiesToShow: []
    },
    tableAgency: {
        header: [],
        data: [],
        propiertiesToShow: []
    },
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addTableAgency: (state, action) => {
            //guarda los datos de tableAgency en el estado global
            const data = action.payload;
            state.tableAgency = data

            //guarda el estado por default
            state.tableDefault = data
        },
        addTableClient: (state, action) => {
            //guarda los datos de tableAgency en el estado global
            const data = action.payload;
            state.tableClient = data

            //guarda el estado por default
            state.tableDefault = data
        },
        addNameTable: (state, action) => {
            //guarda el nombre de la tabla actual
            const data = action.payload;
            state.nameTable = data
        },
        addSortBy: (state, action) => {
            const valueToSortBy = action.payload;
            switch (valueToSortBy) {
                case "Alfabetico":
                    if (state.tableAgency.data.length != 0) {

                        //ordena por nameAency y lo asigna al estado de tableAgency
                        const DataToSort = 'nameAgency'
                        state.tableAgency.data = sortArrDataString(state.tableAgency.data, DataToSort)


                    } else if (state.tableClient.data.length != 0) {

                        //ordena por name y lo asigna al estado de tableClient
                        const DataToSort = 'name'
                        state.tableClient.data = sortArrDataString(state.tableClient.data, DataToSort)
                    }
                    break

                case "Ventas":
                    if (state.tableAgency.data.length != 0) {

                        const DataToSort = 'sumPrice'
                        state.tableAgency.data = sortArrDataNumber(state.tableAgency.data, DataToSort)
                    } else if (state.tableClient.data.length != 0) {
                        const DataToSort = 'finalPrice'
                        state.tableClient.data = sortArrDataNumber(state.tableClient.data, DataToSort)
                    }
                    break;

                default:
                    if (state.tableAgency.data.length != 0) {

                        state.tableAgency = state.tableDefault

                    } else if (state.tableClient.data.length != 0) {

                        state.tableClient = state.tableDefault

                    }
                    break;

            }

        },
    }
})

export const { addTableAgency, addTableClient, addNameTable, addSortBy } = tableSlice.actions;
export default tableSlice.reducer;

