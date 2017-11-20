
import { combineReducers } from 'redux';
import set_message from './incdec_reducer'

const rootReducer = combineReducers({ 
	set_message:set_message
});

export default rootReducer;