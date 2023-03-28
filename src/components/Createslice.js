import { createSlice } from "@reduxjs/toolkit";



const reducer = createSlice({
    name:'cart',
    initialState:{
        cartValue :[],
        totalprice:0,
    },
    reducers:{

        incrementcart: (state,action) => {
            state.cartValue.push(action.payload)
            const array = state.cartValue.map(obj => obj.ProductPrice)
           state.totalprice = array.reduce((a,b) => a+b)

        },
        remove : (state,action) => {
            const index = state.cartValue.findIndex(obj=>obj.ProductName === action.payload.ProductName)
if(index>=0){
            state.cartValue.splice(index,1)
            const array = state.cartValue.map(obj => obj.ProductPrice)
            state.totalprice = array.reduce((a,b) => a+b,0)
 
        }
        }

    }
});
export const {incrementcart,remove} = reducer.actions;

export default reducer.reducer;