import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskslice';

import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  tasks: taskReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
});

// export default configureStore({
//     reducer:{
//         tasks:taskReducer
//     }
// });
