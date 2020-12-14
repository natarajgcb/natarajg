import styles from './starfield.module.scss'

export default function Starfield() {
  return (
    <div className={styles.spacebg}>
      <div className={styles.starfield}>
        <div className={styles['stars-sm']}></div>
        <div className={styles['stars-md']}></div>
        <div className={styles['stars-lg']}></div>
      </div>
    </div>
  )
}
