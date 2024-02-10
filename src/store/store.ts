import { configureStore } from "@reduxjs/toolkit";
import mobileMenuSlice from "@/features/mobilemenu/mobileMenuSlice";
import userStateSlice from "@/features/userstate/userStateSlice";
export const store = configureStore({
    reducer:{
        mobileMenu : mobileMenuSlice,
        userState : userStateSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch