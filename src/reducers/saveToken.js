import createReducer from './../lib/createReducer';
import * as types from './../actions/types';

export const token = createReducer({}, {
  [types.saveToken](state, action){
    return action.token;
  }
})
