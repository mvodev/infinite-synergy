import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { User } from '../components/user-info/UserInfo'

interface UsersState {
  value: Array<User>
}

const initialState: UsersState = {
  value: new Array(100000).fill({}).map((_,index)=>{ 
      return {
        id:index+1,
        name:`user ${(index+1)}`,
        position:`user position ${(index + 1)}`,
        department:`user department ${(index + 1)}`,
        company:`user company ${(index + 1)}`,
        avatar:''
      }
    }
  ),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    modify: (state, action: PayloadAction<User>) => {
      const indexOfUserToModify = state.value.findIndex((user)=>user.id===action.payload.id);
      state.value[indexOfUserToModify] = action.payload;
    },
  },
})

export const { modify } = usersSlice.actions
export const selectCount = (state: RootState) => state.users.value;
export default usersSlice.reducer