import Routers from "./Routes/Route";
import "../app/globals.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autologin } from "./Global/AsyncThunk";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autologin());
  }, [dispatch]);
  return (
    <>
      <Routers />

      {/* <SignIn /> */}
      {/* <SignUp /> */}
    </>
  );
}

export default App;
