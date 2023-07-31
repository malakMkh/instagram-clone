import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  MalakMkh: {
    userId: 'MalakMkh',
    useName: 'malak',
    Pasword: '123456',
  },
  AlaNER: {
    userId: 'AlaNER',
    useName: 'Ala',
    Pasword: '1345',
  },
};

export const UserInformationSlice = createSlice({
  name: 'userInformation', // Renamed to 'userInformation'
  initialState,
  reducers: {
    getUserInformation: (state, action) => {
      const [id, name, password] = action.payload;
      state[id] = {
        userId: id, // Changed to 'userId'
        userName: name, // Changed to 'userName'
        userPassword: password, // Changed to 'userPassword'
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserInformation } = UserInformationSlice.actions;

export default UserInformationSlice.reducer;
