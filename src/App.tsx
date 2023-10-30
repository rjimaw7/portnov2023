import { BrowserRouter } from "react-router-dom";
import RouterView from "./router/RouterView";

const App = () => {
  return (
    <BrowserRouter>
      <RouterView />
    </BrowserRouter>
  );
};

export default App;
