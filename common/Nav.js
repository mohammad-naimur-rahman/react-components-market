import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="d-flex align-items-center shadow shadow-lg">
      <Link href="/" passHref>
        <a className="ms-4">
          <img src="/logo.png" alt="logo" />
        </a>
      </Link>
    </nav>
  )
}

export default Nav
