import ApolloClient, { createNetworkInterface } from 'apollo-client'
//import { ApolloProvider } from 'react-apollo'
//import 'tachyons'
import { InMemoryCache } from 'apollo-cache-inmemory';

const server='http://localhost:8000/graphql/'
//const server = "http://7a34e736.ngrok.io/graphql/"
const networkinterface = createNetworkInterface({
    //uri:'http://localhost:8000/graphql/',
    uri:server,
})

networkinterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null
      req.options.headers['authorization'] = `JWT ${token}` 
      next()
    },
  },
])



const client = new ApolloClient({
    //link:networkinterface
    networkInterface:networkinterface,
    cache : new InMemoryCache(),
})


export default client