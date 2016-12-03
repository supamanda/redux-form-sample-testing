import { combineReducers } from "redux"

import sampleReducer from "./sampleReducer"
import dataReducer from "./dataReducer"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    sampleReducer,
    dataReducer,
    form: formReducer
})