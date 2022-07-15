import { configureStore } from '@reduxjs/toolkit';
import productReducer from './OrderedProducts/productSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsApi } from './AllProducts/productsApi';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, productReducer);

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    orderedProducts: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
  ],
});

export const persistor = persistStore(store);