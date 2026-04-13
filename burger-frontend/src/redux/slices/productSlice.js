import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/fetchProducts";
export const productSlice = createSlice({
    name:"products",
    initialState:{
        data:[],
        isLoading:false,
        error:null,
        filters:[],
        type:"",
        name:""
    },
    reducers:{
        setFilter:(state,action)=>{
            const filterValue = action.payload;
            if(filterValue === "ALL"){
                state.filters = [];
                state.type = ""
                return
            }
            if(filterValue === "VEG" || filterValue === "NONVEG"){
                state.type = state.type!==filterValue?filterValue:""; //check if clicked already comment for future understanding
            }

            if(state.filters.includes(filterValue))
                state.filters = state.filters.filter(f=>f!==filterValue)
            else
                state.filters.push(filterValue);
        },
        setName:(state,action)=>{
            state.name = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProducts.pending,(state)=>{
            state.isLoading = true;
        })

        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload;    
            state.isLoading = false;
        })

        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.error = action.error
        })

    }
})

export const productReducer = productSlice.reducer;
export const {setFilter,setName} = productSlice.actions;