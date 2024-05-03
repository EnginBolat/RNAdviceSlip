import React from "react";
import { Home } from "./app/pages";
import { store } from "./app/redux/store/store";
import { Provider} from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}