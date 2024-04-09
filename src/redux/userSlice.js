import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, action) => {
      const nameExists = state.users.find(
        (i) => i.name === action.payload.name
      );
      const userNameExists = state.users.find(
        (i) => i.userName === action.payload.userName
      );
      const emailExists = state.users.find(
        (i) => i.email === action.payload.email
      );
      if (nameExists) {
        state.users.forEach((i) => {
          if (i.name === action.payload.name) {
            i.message = "* name has already been taken";
          } else {
            i.message = null;
          }
        });
      } else if (userNameExists) {
        state.users.forEach((i) => {
          if (i.userName === action.payload.userName) {
            i.message = "* username has already been taken";
          } else {
            i.message = null;
          }
        });
      } else if (emailExists) {
        state.users.forEach((i) => {
          if (i.email === action.payload.email) {
            i.message = "* email has already been taken";
          } else {
            i.message = null;
          }
        });
      } else {
        state.users.push(action.payload);
        state.users.forEach((i) => {
          i.message = null;
        });
      }
    },
    //    else {
    // }

    //   else if (i.userName === action.payload.userName) {
    //     i.message = "* username already exists";
    //   } else if (i.email === action.payload.email) {
    //     i.message = "* email id already exists";
    //   } else if (i.password === action.payload.password) {
    //     i.message = "* password already exists";
    //   }
  },
});
export const { addUsers } = userSlice.actions;
export default userSlice.reducer;
