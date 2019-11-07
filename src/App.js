import React from 'react';
import './App.css';
import ClickBox from "./ClickBox"
import { Provider } from 'react-redux'

import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <ClickBox />
    </Provider>
  );
}

export default App;
