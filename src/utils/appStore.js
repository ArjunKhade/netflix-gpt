import UserReducer from "./userSlice";
import MoviesReducer from "./movieSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer
  },
});

export default appStore;
