import Routers from "./Routes/Route";
import "../app/globals.css";
import Toasts from "./Provider/Toaster";
function App() {
  return (
    <>
      <Toasts>
        <Routers />
      </Toasts>
    </>
  );
}

export default App;
