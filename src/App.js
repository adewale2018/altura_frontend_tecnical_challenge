import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchNfts } from "./store/actions/nfts"
import Spinner from "./components/Spinner"
import { getStatus, getNfts } from "./store/selectors"
import { ToastContainer } from "react-toastify"
import NFTList from "./pages/NFTList/NFTList"
import { Typography, Container } from "@mui/material"

const App = () => {
  const dispatch = useDispatch()
  const loading = useSelector(getStatus)
  const nfts = useSelector(getNfts)

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
    <Container>
      <div className="App">
        <Typography variant="h2" mt={5} mb={5} color='secondary'>OWNED NTFs</Typography>
        <NFTList nfts={nfts}/>
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
    </Container>
  )
}

export default App
