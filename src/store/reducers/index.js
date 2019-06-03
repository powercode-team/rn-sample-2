import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({});

export default persistReducer(rootPersistConfig, reducers);
