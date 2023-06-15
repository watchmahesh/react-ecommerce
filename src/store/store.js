import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { wishReducer} from "./wishSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
  }


  const rootReducer = combineReducers({
    cart: cartReducer,
    wish: wishReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)