import { createStore } from 'redux';
import reducer from './reducers/index';

//Definir el estado inicial 
//const initialState = [];

const Store = createStore(
    reducer,
    //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;