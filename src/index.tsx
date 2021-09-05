import React from 'react';
import ReactDOM from 'react-dom';
import Root, { createStore } from './presentation';
import reportWebVitals from './reportWebVitals';

const store = createStore();

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root store={store} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

render();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (process.env.NODE_ENV === 'development' && (module as any).hot) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (module as any).hot.accept('./presentation', render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
