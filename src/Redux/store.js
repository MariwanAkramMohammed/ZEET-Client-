import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storageSession from "redux-persist/lib/storage/session";
import ProductSlice from "./ProductSclice";
import userSlice from "./userSlice";
import CartSlice from "./CartSlice";

const persistConfig = {
  key: "user",
  version: 1,
  storage: storageSession,
};

const persistedReducerUser = persistReducer(persistConfig, userSlice);
const persistedReducerCart = persistReducer(persistConfig, CartSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducerUser,
    cart: persistedReducerCart,
    product: ProductSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
