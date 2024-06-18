import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nameTable: "",
    table: []
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        addTableData: (state, action) => {
            const data = action.payload;
            state.table = data[0]
        },
        addNameTable: (state, action) => {
            const data = action.payload;
            state.nameTable = data
        },
    }
})

export const { addTableData, addNameTable } = tableSlice.actions;
export default tableSlice.reducer;
