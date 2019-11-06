import React from 'react';
import './App.css';
import ClickBox from "./ClickBox"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "./reducers.js"

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <ClickBox />
    </Provider>
  );
}

export default App;
