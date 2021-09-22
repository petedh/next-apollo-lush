import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import { gql } from '@apollo/client'
import client from '../apollo-client'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>
          Welcome to our fresh new look | Lush Fresh Handmade Cosmetics
        </title>
        <meta
          name="description"
          content="Welcome to our fresh new look | Lush Fresh Handmade Cosmetics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.gridContainer}>
        {products.map(
          ({
            node: {
              id,
              name,
              seoTitle,
              slug,
              thumbnail: { url },
            },
          }) => (
            <a key={id} href={`/pdp/${slug}`} className={styles.productTile}>
              <Image
                alt={seoTitle}
                height={255}
                src={url}
                title={seoTitle}
                width={255}
              />
              <h2 className={styles.productTitle}>{name}</h2>
            </a>
          )
        )}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Products {
        products(channel: "uk", first: 12) {
          edges {
            cursor
            node {
              id
              name
              seoTitle
              slug
              thumbnail {
                url
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      products: data.products.edges,
    },
  }
}
