import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    isloading:false,
    error:null,
};

export const fetchApiUsers = createAsyncThunk("fetchApiUsers" , async() => {
    // console.log("action ==>");
    const result = await fetch("https://fakestoreapi.com/products");
    return result.json();
})


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state , action) => {
            console.log('inside slice --->', action.payload)
            const newProduct = {
                id:nanoid(),
                name:action.payload
            }
            state.products.push(newProduct);
            // state.products=action.payload
        },  
        removeProduct: (state , action) => {
            // console.log("remove user ==>"  , action)
            const data = state.products.filter((item)=>{
                return item.id!==action.payload
            })
            state.products=data;
           },
        editProduct: (state , action) => {
            // console.log("edit user ==>" , action)
            const edit = state.products.find((edit) => edit.id === action.payload);
            if (edit) {
              const newApi = prompt("Edit Api:", edit.title);
              if (newApi) {
                edit.title = newApi;
            }
          }
        }, 
        deleteAllProduct: (state , action) => {
            const del = state.products.filter((item) => {
                return item.key!==action.payload
            })
            state.products=del;
        }  
    },
 
       extraReducers:(builder) => {
           builder.addCase(fetchApiUsers.fulfilled, (state , action) => {
                console.log(" reducer ==> " , action)

            state.isloading=false;
            state.products=action.payload
        })

        // builder.addCase(fetchApiUsers.pending, (state) => {
        //     state.isloading = true;
        //   })
        //   .addCase(fetchApiUsers.fulfilled, (state, action) => {
        //     state.isloading = false;
        //     state.products = action.payload;
        //   })
        //   .addCase(fetchApiUsers.rejected, (state, action) => {
        //     state.isloading = false;
        //     state.error = action.error.message;
        //   });
    }
});


export const {addProduct , removeProduct , editProduct , deleteAllProduct } = productSlice.actions
// export const {addProduct } = productSlice.actions
export default productSlice.reducer

