import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../../apollo-client'
import Pdp from '../../components/Pdp/Pdp'

const Product = ({ product, product: { seoTitle } }) => {
  return (
    <>
      <Head>
        <title>{seoTitle} | Lush Fresh Handmade Cosmetics</title>
        <meta
          name="description"
          content={`${seoTitle} | Lush Fresh Handmade Cosmetics`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pdp product={product}></Pdp>
    </>
  )
}

export default Product

export async function getServerSideProps(context) {
  const slug = context.params.slug
  const { data } = await client.query({
    query: gql`
        query Products {
            product(channel: "uk", slug: "${slug}" ) {
              description
              media {
                url
              }
              name
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                    }
                  }
                }
              }
              seoTitle
              thumbnail {
                url
              }
            }
        }
        `,
  })

  if (!data.product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: data.product,
    },
  }
}
