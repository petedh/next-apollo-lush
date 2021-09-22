import styles from './Pdp.module.css'
import parse from 'html-react-parser'
import FourOhFour from '../FourOhFour/FourOhFour'

const Pdp = ({
  product,
  product: {
    description,
    media,
    seoTitle,
    name,
    thumbnail: { url },
    pricing: {
      priceRange: {
        start: { gross },
      },
    },
  },
}) => {
  if (product) {
    const descMarkup = JSON.parse(description)
    return (
      <>
        <div className={styles.pdp}>
          <div className={styles.hero}>
            <img
              src={!!media[1] ? media[1].url : media[0].url}
              title={seoTitle}
              alt={seoTitle}
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.details}>
            <div className={styles.detailsHead}>
              <img
                src={url}
                title={seoTitle}
                alt={seoTitle}
                width={255}
                height={255}
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
  } else {
    return <FourOhFour />
  }
}
export default Pdp
