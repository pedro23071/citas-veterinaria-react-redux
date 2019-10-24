import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import validacionReducer from './validacionReducer';

export default combineReducers ({
    cita: citasReducer,
    error: validacionReducer
});