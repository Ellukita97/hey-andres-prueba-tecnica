import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameTable: "",
    table: {
        header: [],
        data: [],
        propiertiesToShow: []
    },
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addTableData: (state, action) => {
            const data = action.payload;
            state.table = data
        },
        addNameTable: (state, action) => {
            const data = action.payload;
            state.nameTable = data
        },
        addSortBy: (state, action) => {
            const valueToSortBy = action.payload;
            switch (valueToSortBy) {
                case "Alfabetico":
                    const isAgency = state.table.data[0].hasOwnProperty("nameAgency")

                    if (isAgency) {
                        state.table.data = state.table.data.sort((a, b) => {
                            if (a.nameAgency < b.nameAgency) {
                                return -1
                            } else if (a.nameAgency > b.nameAgency) {
                                return 1
                            } else {
                                return 0
                            }
                        })
                    } else {
                        state.table.data = state.table.data.sort((a, b) => {
                            if (a.name < b.name) {
                                return -1
                            } else if (a.name > b.name) {
                                return 1
                            } else {
                                return 0
                            }
                        })
                    }

                    break

                case "Ventas":

                    break;

                default:
                    break;
            }

        },
    }
})

export const { addTableData, addNameTable, addSortBy } = tableSlice.actions;
export default tableSlice.reducer;
