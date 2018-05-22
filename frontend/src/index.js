import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo'
import client from './connection'
import './components/in.css';
import Loading from './loading'
import Loadable from 'react-loadable'


const App = Loadable({
    loader: () => import('./App'),
    loading : Loading
})

ReactDOM.render((
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ),
    document.getElementById('root')
  )


//ReactDOM.render("sdfsdfd", document.getElementById('root'));
registerServiceWorker();
