import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './Book/Book';

const store = configureStore({reducer: {
    Book: bookSlice
}})
export default store