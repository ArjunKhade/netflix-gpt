import UserReducer from "./userSlice";
import MoviesReducer from "./movieSlice";
import GPTReducer from "./gptSlice";
import LangReducer from"./configSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    gpt: GPTReducer,
    config: LangReducer
  },
});

export default appStore;
