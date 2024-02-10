import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '@/store/store'

type FirebaseUser = {
    uid : string,
    email : string,

}
export type UserState = {
    user : FirebaseUser | null
}

const initialState : UserState = {
    user : null
}

export const userStateSlice = createSlice({
    name : 'userState',
    initialState,
    reducers : {
        logIn : (state,action) => {
            state.user = action.payload
        },
        logOut : state => {
            state.user = null
        }

    }
})

export const {logIn , logOut} = userStateSlice.actions
export const initialUserState = (state : RootState) => state.userState.user

export default userStateSlice.reducer