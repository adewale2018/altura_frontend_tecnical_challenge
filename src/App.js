import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchNfts } from "./store/actions/nfts"
import Spinner from "./components/Spinner"
import { getStatus } from "./store/selectors"
import { ToastContainer } from "react-toastify"

const App = () => {
  const dispatch = useDispatch()
  const loading = useSelector(getStatus)

  useEffect(() => {
    dispatch(fetchNfts())
  }, [])

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <div className="App">
        <h1>REACT BOILER PLATE</h1>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
