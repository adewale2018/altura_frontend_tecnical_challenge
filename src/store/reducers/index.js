import { combineReducers } from "redux"
import nfts from './nfts'

export default combineReducers({
  data: nfts,
})
