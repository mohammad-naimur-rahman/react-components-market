import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import logos from '../../data/components/slider/owlCarouselBrands.json'

const OwlBrands = () => {
  return (
    <div className="container">
      <h4>Brands logo example</h4>
      <div className="brand-carousel-wrapper">
        <OwlCarousel
          className="owl-theme owl-brand-slider"
          loop
          autoplay
          center
          dots={false}
          autoplayTimeout={3000}
        >
          {logos.map((logo) => (
            <div className="item" key={logo.id}>
              <img src={logo.src} alt={logo.id} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  )
}

export default OwlBrands
