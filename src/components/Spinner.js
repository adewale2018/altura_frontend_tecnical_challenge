import { CircularProgress } from "@mui/material"

const Spinner = () => {
  return <div style={{textAlign: 'center', marginTop: '200px'}}>
    <CircularProgress color="secondary" />
    <p>Please wait, loading data...</p>
  </div>
}

export default Spinner
