import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

const Layout = ({ title = 'React Components Market', meta, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <Nav />
      <div className="layout-children">{children}</div>
    </>
  )
}

export default Layout
