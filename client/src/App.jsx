import { BrowserRouter } from "react-router-dom";
import { Context } from "./context";
import { AppRouter } from "./components/AppRouter";
import { Store } from "./store/store";
import { observer } from "mobx-react-lite";

const App = () => {
  const store = new Store();

  return (
    <Context.Provider value={{ store }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
};

export default observer(App);
