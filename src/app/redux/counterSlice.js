import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

const counterSlice = createSlice({
    name: "addUser",
    initialState,
    reducers: {
        addUser: (state , action) => {
            console.log(action)
            const data = {
                name:action.name
            }
                state.users.push(data);
        }    
    },
});


export const {addUser} = counterSlice.actions
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
