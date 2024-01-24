import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'
import GithubIcon from '../../assets/icons/GithubIcon'
import LinkedinIcon from '../../assets/icons/LinkedinIcon'

import styles from './home.module.css'

function Home ({ title, subtitle }) {
  return (
    <section className={styles.section}>
      <div className={styles.contain}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <ul>
          <li>
            <a><GithubIcon />Mi GitHub</a>
          </li>
          <li>
            <a><LinkedinIcon />Mi LinkedIn</a>
          </li>
        </ul>
        <ArrowDownIcon className={styles.arrowDownIcon}/>
      </div>
    </section>
  )
}

export default Home