import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Book from './Components/Book/Book';
import store from './Components/store';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        {<Book />}
      </Provider>
    </Fragment>
  );
}

export default App;
