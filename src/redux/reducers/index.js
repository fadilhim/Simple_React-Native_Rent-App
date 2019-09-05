import { combineReducers } from 'redux';

import users from './user'
import books from './book'

const reducers = combineReducers({
    users,
    books,
});

export default reducers