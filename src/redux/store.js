import { changeViewReducer } from './Reducer/ChangeViewRed';
import { createStore } from 'redux';

export const store = createStore(changeViewReducer);
