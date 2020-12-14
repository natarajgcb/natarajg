import styles from './mngstarfield.module.scss'

export default function MNGStarfield() {
  return (
    <div className={styles.mngspacebg}>
      <div className={styles.mngstarfield}>
        <div className={styles['stars-sm']}></div>
        <div className={styles['stars-md']}></div>
        <div className={styles['stars-lg']}></div>
      </div>
    </div>
  )
}
