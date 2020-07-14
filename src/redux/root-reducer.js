import { combineReudcers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReudcers({
  user: userReducer
})