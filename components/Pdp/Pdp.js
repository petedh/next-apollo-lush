import styles from './Pdp.module.css'
import parse from 'html-react-parser'
import FourOhFour from '../FourOhFour/FourOhFour'

const Pdp = (product) => {
  if (!product.product) {
    return <FourOhFour />
  } else {
    const {
      product: {
        description,
        media,
        name,
        pricing: {
          priceRange: {
            start: { gross },
          },
        },
        seoTitle,
        thumbnail: { url },
      },
    } = product
    const descMarkup = JSON.parse(description)
    const heroImg = media.length > 0 ? media[1].url : media[0].url
    return (
      <>
        <div className={styles.pdp}>
          <div className={styles.hero}>
            <img
              alt={seoTitle}
              height={1000}
              src={heroImg}
              title={seoTitle}
              width={1000}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.detailsHead}>
              <img
                alt={seoTitle}
                height={255}
                src={url}
                title={seoTitle}
                width={255}
              />
              <h1>{name}</h1>
              <h2>Price: £{gross.amount.toFixed(2)}</h2>
            </div>
            {descMarkup.blocks.map((block, index) => (
              <div key={`desc desc-${index}`}>{parse(block.data.text)}</div>
            ))}
          </div>
        </div>
      </>
    )
  }
}
export default Pdp
