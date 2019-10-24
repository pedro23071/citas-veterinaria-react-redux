import { createStore } from 'redux';
import reducer from './reducers/index';

//traemos las metodos de localStorage
import {getStateStorage, setStateStorage} from './localStorage';

//Definir el estado inicial (obtener citas de local storage) 
const storageState = getStateStorage();

const Store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(() => {
    setStateStorage({
        cita: Store.getState().cita
    })
});

export default Store;