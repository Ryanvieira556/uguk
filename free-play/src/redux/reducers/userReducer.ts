import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'filter' ,
    initialState: {
        plataform: 'Todos', 
        category: 'Todos'
    },
    reducers: {
        setPlataform: ( state, action) => {
            state.plataform = action.payload
        },
        setCategory: ( state, action) => {
            state.category = action.payload
        }
    }
})

export const { setPlataform, setCategory } = slice.actions
export default slice.reducer;