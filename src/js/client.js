import React from "react"
import ReactDOM from "react-dom"

import { App } from './app'
import { AppContainer } from 'react-hot-loader'

const app = document.getElementById('theform')

// ReactDOM.
// render(
//     <Provider store={store}>
//         <Layout />
//     </Provider>, 
//     app);

ReactDOM.render(
  <AppContainer>
    <App />
      </AppContainer>,
  app
);

if (module.hot) {
  module.hot.accept('./app', () => {
    render(<AppContainer>
      <App />
    </AppContainer>,
      app
    );
  });
}