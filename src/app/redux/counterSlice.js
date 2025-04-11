"use client"
import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    userApiData:[],
    users:[],
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers" , async() => {
    // console.log("action ==>");
    const result = await fetch("https://fakestoreapi.com/products");
    return result.json();
})

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
            const edit = state.users.find((edit) => edit.id === action.payload);
            if (edit) {
              const newName = prompt("Edit Name:", edit.name);
              if (newName) {
                edit.name = newName;
            }
          }
        }, 
        deleteUser: (state , action) => {
            const del = state.users.filter((item) => {
                return item.key!==action.payload
            })
            state.users=del;
        }  
    },
    extraReducers:(builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state , action) => {
            console.log(" reducer ==> " , action)

            state.isloading=false;
            state.userApiData = action.payload
        })
    }
});


export const {addUser ,  removeUser , editUser , deleteUser } = counterSlice.actions
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


