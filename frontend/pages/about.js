import React from 'react'
import Link from 'next/link'
import Layout from '../component/layout';
/*
export default () =>
  <div>
    <Link href="/about">
      <a>here</a>
    </Link>
    to read more
  </div>
*/

class About extends React.Component{
    render(){
        return(
            <Layout>
                <h1>about us</h1>
            </Layout>
/*            <div>
                <Link href="/">
                <a>Home</a>
                </Link>
                to Back home
            </div>*/
        )
    }
}
export default About;