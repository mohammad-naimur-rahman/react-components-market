import Card from '../common/Card'
import Layout from '../common/Layout'
import data from '../data/common/componentsList.json'

export default function Home({ data }) {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center py-3">Components</h1>
        <div className="row">
          {data?.map((el) => (
            <div className="col-lg-4 col-md-6" key={el.id}>
              <Card href={el.href} title={el.title} img={el.img} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export function getStaticProps() {
  return {
    props: {
      data
    }
  }
}
