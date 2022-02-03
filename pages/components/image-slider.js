import dynamic from 'next/dynamic'
import Layout from '../../common/Layout'
import OwlBrands from '../../components/slider/OwlBrands'
const OwlCarouselSlider = dynamic(
  () => import('../../components/slider/OwlCarouselSlider'),
  { ssr: false }
)

const ImageSliderPage = () => {
  return (
    <Layout title="Image Slider">
      <OwlCarouselSlider />
      <OwlBrands />
    </Layout>
  )
}

export default ImageSliderPage
