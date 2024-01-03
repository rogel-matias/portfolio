import Whatsapp from '../../assets/icons/WhatsappIcon'
import Linkedin from '../../assets/icons/LinkedinIcon'
import Github from '../../assets/icons/GithubIcon'

import styles from './footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/rogel-matias" target='_blank' rel='noreferrer'><Github /></a>
      <a href="https://www.linkedin.com/in/rogel-matias/" target='_blank' rel='noreferrer'><Linkedin /></a>
      <a href="https://wa.me/+543434654688" target='_blank' rel='noreferrer'><Whatsapp /></a>
    </footer>
  )
}