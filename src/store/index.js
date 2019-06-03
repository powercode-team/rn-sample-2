import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import sagas from './saga';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

// For react native debugger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { persistor, store };
