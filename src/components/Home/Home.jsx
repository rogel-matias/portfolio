import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'

import styles from './home.module.css'

function Home () {
  return (
    <section className={styles.section}>
      <h1>Matías Rogel</h1>
      <h3>Frontend Developer</h3>
      <ul>
        <li>
          <a>Visitar mi Github</a>
        </li>
        <li>
          <a>Visitar mi Linkedin</a>
        </li>
      </ul>
      <ArrowDownIcon className={styles.arrowDownIcon}/>
    </section>
  )
}

export default Home