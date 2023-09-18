import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user:userSlice,
        gpt: gptReducer,
    }
})

export default appStore;