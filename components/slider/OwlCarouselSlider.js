import React from 'react'
import OwlCarousel from 'react-owl-carousel'

const OwlCarouselSlider = () => {
  return (
    <div className="container">
      <h3>Owl Carousel</h3>
      <div className="row">
        <div className="col-md-12">
          <h4>Basic Example</h4>
          <OwlCarousel
            className="owl-theme border"
            loop
            margin={10}
            nav
            autoplay
          >
            <div className="item">
              <h4>1</h4>
            </div>
            <div className="item">
              <h4>2</h4>
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
            <div className="item">
              <h4>4</h4>
            </div>
            <div className="item">
              <h4>5</h4>
            </div>
            <div className="item">
              <h4>6</h4>
            </div>
            <div className="item">
              <h4>7</h4>
            </div>
            <div className="item">
              <h4>8</h4>
            </div>
            <div className="item">
              <h4>9</h4>
            </div>
            <div className="item">
              <h4>10</h4>
            </div>
            <div className="item">
              <h4>11</h4>
            </div>
            <div className="item">
              <h4>12</h4>
            </div>
          </OwlCarousel>
          <button className="owl-next">Next</button>
        </div>
      </div>
    </div>
  )
}

export default OwlCarouselSlider
