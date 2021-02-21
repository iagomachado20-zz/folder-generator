import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './routes';
import { GlobalStyle } from './styles';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <GlobalStyle/>
        <Routes/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
