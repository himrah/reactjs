import React from 'react'
import Layout from '../component/layout';
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

//import Layout from '../component/layout'
class App extends React.Component{
    render(){
        return(
            <Layout>
                <div>
                    <Link href="/about">
                    <a>here</a>
                    </Link>
                    to read more
                </div>
            </Layout>
        )
    }
}
export default App;