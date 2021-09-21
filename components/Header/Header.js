import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <p>
        <b>Free UK delivery over £45</b>{' '}
        <a
          href="https://www.lush.com/uk/en/faq/delivery-information"
          target="_self"
        >
          Learn more
        </a>{' '}
        | <b>Pay in 3 with Klarna</b>{' '}
        <a
          href="https://www.lush.com/uk/en/a/klarna-frequently-asked-questions"
          target="_self"
        >
          Learn more
        </a>
      </p>
    </header>
  )
}
export default Header
