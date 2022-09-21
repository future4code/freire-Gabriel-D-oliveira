import React from "react";
import { Router } from "./routes/Router";
import { GlobalState } from "./context/GlobalState";
import { GlobalStyled} from "./context/GlobalStyled";

const App = () => {
  return (
    <GlobalState>
      <GlobalStyled/>
      <Router />
    </GlobalState>
  );
};

export default App;
