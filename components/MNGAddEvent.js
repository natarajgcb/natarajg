import styles from './styles/MNGAddEvent/css/MNGAddEvent.module.css'
import Script from 'next/script'

export const MNGAddEvent = (props) => {
  return (
    <>
      <Script
        src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[ ADDEVENT LOG ] AddEvent loaded")
          addeventatc.refresh();
        }}
        onError={(e) => {
          console.error('[ ADDEVENT LOG ] AddEvent failed to load', e)
        }}
      />
      <div title="Add to Calendar" className={styles.addeventatc}>
        Add to Calendar
        <span className={styles.start}>01/20/2022 03:00 PM</span>
        <span className={styles.end}>01/20/2022 06:00 PM</span>
        <span className={styles.timezone}>America/Los_Angeles</span>
        <span className={styles.title}>Master Nataraj G Office Hours</span>
        <span className={styles.description}>Co-operate and collaborate with Master Nataraj G to heal, change and build our New World of Peace, Love, Joy, Balance and Gratitude together.</span>
        <span className={styles.location}>https://natarajg.space/virtualstudio</span>
        <span className={styles.recurring}>FREQ=WEEKLY;BYDAY=TH</span>
      </div>
    </>
  )
}
