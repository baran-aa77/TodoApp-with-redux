import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id:1 , title:'English class' , description:'10-12 oclock', isDone:false},
    {id:2 , title:'Reading book' , description:'pages 10-20', isDone:true}
]

export const Todoslice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    deletetodo:(state,action)=>{
        const payload=action.payload
        const index=state.findIndex(todo=>todo.id===payload)
        state.splice(index,1)
    },
   addtodo:(state,action)=>{
    const payload=action.payload
    state.push({id:Math.floor(Math.random()*1000),title:payload.title,isDone:payload.isDone})
   },
   updatetodo:(state,action)=>{
const payload=action.payload
const index=state.findIndex(todo=>todo.id===payload.id)
state[index]=payload
   }
  },
})

export const {addtodo,updatetodo,deletetodo} = Todoslice.actions

export default Todoslice.reducer