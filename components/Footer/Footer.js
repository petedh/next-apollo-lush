import styles from './Footer.module.css'
const Footer =() => {
  return(
    <footer className={styles.footer}>
      <div className={styles.waveHolder}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className={styles.wave}>
          <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" ></path>
        </svg>
      </div>
      <p>Copyright © 1995–2021 Lush Retail Ltd.</p>
    </footer>
  )
}
export default Footer