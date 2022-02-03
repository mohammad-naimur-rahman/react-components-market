import dynamic from 'next/dynamic'
import Layout from '../../common/Layout'
const OwlCarouselSlider = dynamic(
  () => import('../../components/slider/OwlCarouselSlider'),
  { ssr: false }
)

const ImageSliderPage = () => {
  return (
    <Layout title="Image Slider">
      <OwlCarouselSlider />
    </Layout>
  )
}

export default ImageSliderPage
