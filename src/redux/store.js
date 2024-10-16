import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
// import authSlice from "./slices/authSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//     auth: authSlice,
//   },
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
// import { combineReducers } from "redux";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// // Persist configuration for the user slice
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Combine reducers if there are multiple slices
// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store); // Persistor for store

// export default store;
