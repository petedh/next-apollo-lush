import styles from './Header.module.css'
const Header = () => {
  return (
    <>
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
      <a href="/" className={styles.homeLogo}>
        <svg
          width="3.7391304348em"
          height="1em"
          viewBox="0 0 86 23"
          focusable="false"
          role="presentation"
          aria-hidden="true"
          name=""
        >
          <path
            fill="currentColor"
            d="M78.4,0.5v7.6h-6.3V0.5h-6.7v21.9h6.7v-8.7h6.3v8.7h6.7V0.5H78.4z M55.6,9.1c-3.1-0.9-6.2-1.2-6.3-2.8 c0-1.2,1.5-1.5,2.4-1.5c0.7,0,1.4,0.2,2,0.6c0.5,0.4,0.9,0.9,0.8,1.7h6.3C60.6,1.8,56.4,0,51.7,0C47.3,0,43,2.2,43,7.2 c0,4.4,3.9,5.4,7.4,6.3c3.7,1.1,4.7,1.4,4.7,2.5c0,1.6-1.7,2-2.8,2c-1.2,0-2.7-0.3-3.2-1.6c-0.2-0.4-0.2-0.9-0.2-1.4h-6.7 c0.1,7,7.1,7.9,9.5,7.9c4.8,0,10-1.8,10-7.5C61.7,11.4,58.7,9.9,55.6,9.1L55.6,9.1z M6.7,0.5H0v21.9h16.3v-5.6H6.7V0.5z M32,12.4 c0,2.2,0,5-3.2,5c-3.3,0-3.3-2.8-3.3-5V0.5h-6.7v13.4c0,6.1,3.3,9,9.9,9c6.6,0,9.9-2.9,9.9-9V0.5H32V12.4z"
          ></path>
        </svg>
        <span className={styles.srOnly}>LUSH</span>
      </a>
    </>
  )
}
export default Header
