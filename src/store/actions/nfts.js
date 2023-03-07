import { FETCH_DATA, SET_STATUS } from "../types/index"
import axios from "axios"
import { toast } from "react-toastify"

const BASE_URL = process.env.REACT_APP_BASE_URL
const ADDRESS = process.env.REACT_APP_ADDRESS

export const fetchNfts = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_STATUS,
      payload: true,
    })
    try {
      const res = await axios.get(`${BASE_URL}/getNFTs/?owner=${ADDRESS}`)
      if (res.status === 200) {
        dispatch({ type: SET_STATUS, payload: false })
        dispatch({ type: FETCH_DATA, payload: res.data })
        toast.success("Successfully fetched data from the server")
      }
    } catch (error) {
      toast.error("Failed to get data from the server")
      dispatch({
        type: SET_STATUS,
        payload: false,
      })
    }
  }
}
