import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Layout from '../../components/Layout';
import { data } from '../../utils/data';

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;

  //   find accept the function as a parameter to get search criteria
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={440}
            height={440}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>category: {product.category}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>
                ${product.countInStock > 0 ? 'In stock' : 'out of stock'}
              </div>
            </div>
            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
