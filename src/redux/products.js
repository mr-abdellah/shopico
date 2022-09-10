import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk("products/loaded", async () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json())
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    pending: false,
    failed: false,
    products: [],
  },
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state) => {
      state.pending = true;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.pending = false;
      state.products = action.payload.map((product) => ({
        id: product.id,
        title: product.title,
        description: product.description,
        img: product.image,
        category: product.category,
        rating: product.rating.rate,
        price: product.price,
      }));
    },
    [loadProducts.rejected]: (state) => {
      state.failed = true;
    },
  },
});

export default productsSlice.reducer;