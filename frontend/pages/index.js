import React from 'react'
import Link from 'next/link'
/*
export default () =>
  <div>
    <Link href="/about">
      <a>here</a>
    </Link>
    to read more
  </div>
*/

import Layout from '../component/layout'
class App extends React.Component{
    render(){
        return(
            <Layout>
            <h1>Home Page</h1>
            </Layout>
/*            <div>
                <Link href="/about">
                <a>here</a>
                </Link>
                to read more
            </div>*/
        )
    }
}
export default App;