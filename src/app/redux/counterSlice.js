"use client"
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users:[],
};

const counterSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {
        addUser: (state , action) => {
            console.log('inside slice --->', action.payload)
            const useData = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(useData);
        },
        removeUser: (state , action) => {
            // console.log("remove user ==>"  , action)
            const data = state.users.filter((item)=>{
                return item.id!==action.payload
            })
            state.users=data;
           },
        editUser: (state , action) => {
            // console.log("edit user ==>" , action)
            const edit = state.users[action.payload]
            if(edit){
                prompt(edit.name);
            }
            
        }    
    },
});


export const {addUser ,  removeUser , editUser} = counterSlice.actions
export default counterSlice.reducer


// const counterSlice = createSlice({
//     name: "counter", 
//     initialState: {value: 5},
//     reducers: {
//         increment: (state) => {
//         state.value += 5;
//     },  
//         decrement: (state) => {
//         state.value -= 5;
//     },
//   },
// });


// export const {increment , decrement} = counterSlice.actions
// export default counterSlice.reducer


