import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTasksList: [],
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTaskReducer: (state, action) => {
            const exists = state.allTasksList.find(task => task.id === action.payload.id)
            if (!exists) {
                state.allTasksList.push({
                    id: action.payload.id,
                    titulo: action.payload.titulo,
                    descripcion: action.payload.descripcion,
                    estado_actual: action.payload.estado_actual
                })
            }
        },
        updateTaskReducer: (state, action) => {
            const { id, titulo, descripcion, estado_actual } = action.payload
            const tasks = state.allTasksList.find((item) => item.id == id)
            if (tasks) {
                tasks.titulo = titulo
                tasks.descripcion = descripcion
                tasks.estado_actual = estado_actual
            }
        },
        deleteTaskReducer: (state, action) => {
            state.allTasksList = state.allTasksList.filter((t) => t.id !== action.payload)
        }
    }
})

export const { addTaskReducer, updateTaskReducer, deleteTaskReducer } = taskSlice.actions

export default taskSlice.reducer