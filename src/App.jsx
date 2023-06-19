import { RoutesMain } from "./Routes/RoutesMain";
import { GlobalStyles } from "./styles/globalStyles";
import { ResetStyle } from "./styles/reset";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
      <ToastContainer />
      <RoutesMain />
      <GlobalStyles />
      <ResetStyle />
    </>
  )
}

export default App
