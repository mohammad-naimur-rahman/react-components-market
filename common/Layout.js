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
      <div className="layout-children">
        <h1 className="text-center p-3">{title}</h1>
        {children}
      </div>
    </>
  )
}

export default Layout
