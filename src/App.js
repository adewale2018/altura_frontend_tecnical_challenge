import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { fetchNfts } from "./store/actions/nfts";
import Spinner from "./components/Spinner";
import { getStatus, getNftsTotalCount } from "./store/selectors";
import { ToastContainer } from "react-toastify";
import { Typography, Container, Chip } from "@mui/material";
import Pagination from "./components/pagination/Pagination";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getStatus);
  const totalCount = useSelector(getNftsTotalCount);

  useEffect(() => {
    dispatch(fetchNfts());
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <Container>
      <div className="App">
        <Typography variant="h2" mt={5} mb={5} color="secondary">
          OWNED NTFs
        </Typography>
        <Wrapper>
          <Typography mr={2}>TOTAL</Typography>
          <Chip
            label={totalCount && totalCount}
            variant="outlined"
            color="secondary"
          />
        </Wrapper>
        <Pagination itemsPerPage={6} />
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
  );
};

export default App;
