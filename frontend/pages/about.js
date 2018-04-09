import React from 'react'
import Link from 'next/link'
//import Layout from '../component/layout';
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
            <div>
                <Link href="/">
                <a>Home</a>
                </Link>
                to Back home
            </div>
        )
    }
}
export default About;