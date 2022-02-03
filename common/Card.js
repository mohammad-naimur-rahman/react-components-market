import Link from 'next/link'
import React from 'react'

const Card = ({ href, title, img }) => {
  return (
    <Link href={`/components/${href}`} passHref>
      <div className="card shadow shadow-md m-3 rounded">
        <div className="p-3">
          <img src={img} alt={title} className="img-fluid" />
          <h4 className="pt-3 text-center">{title}</h4>
        </div>
      </div>
    </Link>
  )
}

export default Card
