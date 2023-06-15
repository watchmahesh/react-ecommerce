import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: [],
    },
    reducers: {
        addToWishList: (state, action) => {
            const itemInWish = state.wishlist.find((item) => item.id === action.payload.id);
            if (itemInWish) {
                itemInWish.quantity++;
            } else {
                state.wishlist.push({ ...action.payload, quantity: 1 });
            }
        },
        removeWishItem: (state, action) => {
            const removeItem = state.wishlist.filter((item) => item.id !== action.payload.id);
            console.log(removeItem)
            state.wishlist = removeItem;
        },
    },
});

export const wishReducer = wishListSlice.reducer;
export const {
    addToWishList,
    removeWishItem,
} = wishListSlice.actions;