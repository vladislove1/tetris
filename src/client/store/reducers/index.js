import { combineReducers } from 'redux'

import chatReducer from './chat'
import startView from './startView'

export default combineReducers({
  chat: chatReducer,
  init: startView,
})
