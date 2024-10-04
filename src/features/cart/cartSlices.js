import { createSlice} from "@reduxjs/toolkit"

const roundToTwoDecimalPlaces = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const initialState = {
    items: [],
  totalQuantity: 0 ,
  totalPrice: 0,
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action) =>{
            const newItem = action.payload
            const existingItem = state.items.find((item)=>item.id===newItem.id)
            state.totalQuantity++
            state.totalPrice += newItem.price;
            state.totalPrice = roundToTwoDecimalPlaces(state.totalPrice);

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    image:newItem.image,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            }else {
                existingItem.quantity++;
                
              }
            console.log(Number(state.totalPrice))

        },
        removeToCart:(state, action)=>{
            const removedItem = action.payload;
            const existingItem = state.items.find(item => item.id === removedItem.id);
        
            if (existingItem) {
                state.totalQuantity--; // Decrement total quantity
                state.totalPrice -= existingItem.price; // Subtract the price of the removed item
                state.totalPrice = roundToTwoDecimalPlaces(state.totalPrice); 

                if (existingItem.quantity === 1) {
                    // If the quantity of the item to be removed is 1, remove it from the items array
                    state.items = state.items.filter(item => item.id !== removedItem.id);
                    console.log(existingItem.quantity)
                } else {
                    // Otherwise, decrement the quantity of the item
                    existingItem.quantity--;
                    console.log(existingItem.quantity)

                }
                
            }
            console.log(Number(state.totalPrice))
            
        },
        increaseItemQuantity(state, action) {
            const id = action.payload;
            const selectedItem = state.items.find(item => item.id === id);
            if (selectedItem) {
              selectedItem.quantity++;
              selectedItem.totalPrice += id.price;
              console.log(selectedItem.quantity)
            }
           
          },
          decreaseItemQuantity(state, action) {
            const id = action.payload;
            const selectedItem = state.items.find(item => item.id === id);
            if (selectedItem && selectedItem.quantity > 1) {
              selectedItem.quantity--;
              selectedItem.totalPrice -= id.price;

            }
          },
           clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
    },
    }
})

export const selectAllCartItems = (state)=>state.cart;

export const {addToCart,removeToCart,increaseItemQuantity,decreaseItemQuantity,clearCart} = CartSlice.actions

export default CartSlice.reducer