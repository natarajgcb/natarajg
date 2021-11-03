import { Image } from '@chakra-ui/react'

import styles from './mnggauralok.module.scss'

export const MNGGauralok = (props) => {
  return (
    <Image
      className={styles.gauralok}
      borderRadius="full"
      boxShadow="0px 0px 39px 0px #96731C"
      src="/img/gauralok.png"
      alt="Gauralok"
      title="Gauralok"
    />
  )
}
