import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export const userSlice = createSliceWithThunks({
  name: 'user',
  initialState: {
    isConnected: false,
    userInfo: {
      publicKey: null,
      type: null
    }
  },
  reducers: (create) => ({
    connect: create.reducer((state, { payload }) => {
      state.isConnected = true
      state.userInfo = payload
    }),
    disconnect: create.reducer((state) => {
      state.isConnected = false
      state.userInfo.publicKey = null
      state.userInfo.type = null
    })
  }),
})

export default userSlice.reducer
export const { connect, disconnect } = userSlice.actions
