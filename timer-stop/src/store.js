// This module will create the Store for redux

import Reducers from './reducers';
import { createStore } from 'redux';

const store = createStore(Reducers);


export default store;
