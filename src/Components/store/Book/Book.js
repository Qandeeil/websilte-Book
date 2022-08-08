import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const getBook = createAsyncThunk('book/getBook', 
    async (_,thunkAPI) => {
        try {
            const res = await fetch('https://api.jsonbin.io/v3/b/62f03b165c146d63ca639db6')
            const Data = await res.json();
            return Data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })

export const insertBook = createAsyncThunk('book/insertBook', 
    async (addBook,thunkAPI) => {
        try {
            const res = await fetch('https://api.jsonbin.io/v3/b/62f03b165c146d63ca639db6',{
                method: 'POST',
                body: JSON.stringify(addBook),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            const Data = await res.json();
            return Data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const deleteBook = createAsyncThunk('book/deleteBook', 
    async (id,thunkAPI) => {
        try {
            await fetch(`https://api.jsonbin.io/v3/b/62f03b165c146d63ca639db6/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            return id
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const insert = createAsyncThunk('book/insert', async (addBook) => {
    return addBook
})

export const deleted = createAsyncThunk('book/deleted', async (deletedBook) => {
    return deletedBook
})

const initialState = {book: [] , isLoading: false , isError: null}
const bookSlice = createSlice({
    name: 'book',
    initialState: initialState,
    extraReducers: {
        // --------------Show Book--------------
        [getBook.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getBook.fulfilled]: (state,action) => {
            state.isLoading = false
            state.book = action.payload.record.Books
        },
        [getBook.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        // --------------Add Book--------------
        [insertBook.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [insertBook.fulfilled]: (state,action) => {
            state.isLoading = false
            state.book.push(action.payload)
        },
        [insertBook.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        // --------------Delete Book--------------
        [deleteBook.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [deleteBook.fulfilled]: (state,action) => {
            state.isLoading = false
            state.book = state.book.filter(({id}) => id !== action.payload)
        },
        [deleteBook.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        // --------------Add Book in state--------------
        [insert.fulfilled]: (state,action) => {
            state.book.push(action.payload)
        },
        // --------------Delete Book in state--------------
        [deleted.fulfilled]: (state,action) => {
            state.book = state.book.filter(({id}) => id !== action.payload)
        }
    },
})
export default bookSlice.reducer;