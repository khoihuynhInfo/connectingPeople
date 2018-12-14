import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './rootReducer';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        // window.__REDUX_DEVTOOLS_EXTENSION__
        // ? compose(
        //       applyMiddleware(sagaMiddleware),
        //       window.__REDUX_DEVTOOLS_EXTENSION__(),
        //   )
        // : 
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;