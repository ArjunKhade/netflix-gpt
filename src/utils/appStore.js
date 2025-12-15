import UserReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default appStore;
