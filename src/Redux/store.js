import { configureStore } from '@reduxjs/toolkit';
import UserInformation from './UserInformation';
export const store = configureStore({
  reducer: { UserInformations: UserInformation },
});
