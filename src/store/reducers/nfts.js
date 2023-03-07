import { FETCH_DATA, SET_STATUS } from '../types/index'
const initialState = {
  status: false,
  nfts: []
}

export default function(state  = initialState, action) {
  const{payload, type } = action
  switch (type) {
    case SET_STATUS:
      return {
        ...state,
        status:payload,
      }
    case FETCH_DATA:
      return {
        ...state,
        nfts: payload
      }
    default:
      return state
  }
}
