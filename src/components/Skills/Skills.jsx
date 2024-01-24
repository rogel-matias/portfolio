import styles from './skills.module.css'
import { data } from '../../data/data.js'

function Skills ({ title }) {

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div>
      {
        data.skills.map(skill => <img key={skill['alt']} src={skill['svg']}/>)
      }
      </div>
    </section>
  )
}

export default Skills