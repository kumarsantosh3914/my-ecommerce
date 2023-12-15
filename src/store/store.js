import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./seachSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    modal: modalReducer,
    cart: cartReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export default store;
