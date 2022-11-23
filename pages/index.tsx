import Layout from '../components/Layout';
import { data } from '../utils/data';
import ProductItem from '../components/ProductItem'

const Home = () => {
  return (
    <Layout title={'Home Page'}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2'>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  )
}

export default Home;
