import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

export type MobileMenuState = {
    isOpen : boolean
}

const initialState : MobileMenuState = {
    isOpen: false
}

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers : {
        makeItOpen : state => {
            state.isOpen = true
        },
        makeItClose : state => {
            state.isOpen = false
        }
    }

})

export const {makeItOpen, makeItClose} = mobileMenuSlice.actions
export const selectMobileMenuOpen = (state: RootState) => state.mobileMenu.isOpen;
export default mobileMenuSlice.reducer