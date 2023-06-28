import { useContext } from "react";
import { RoutesMain } from "./Routes/RoutesMain";
import { userContext } from "./providers/userContext";
import { GlobalStyles } from "./styles/globalStyles";
import { ResetStyle } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Spinner} from "./components/spinner";

const App = () => {
  const { globalLoading } = useContext(userContext);

  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <ResetStyle />
      {globalLoading ? <Spinner /> : <RoutesMain />}
    </>
  )
}

export default App
