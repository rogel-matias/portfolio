// import Project from '../components/Project'
import { data } from '../../data/data.js'
import Project from './Project/Project.jsx'
import styles from './projects.module.css'

export default function Projects () {
  return(
    <section className={styles.section}>
      <h2>Proyectos</h2>
      <p>Aquí les presento algunos de los proyectos en los que he trabajado a lo largo de mi formación.</p>
      <p>Para ver todo el repositorio visita mi <a>github</a>.</p>
      <div className={styles.container}>
        { data.projects.map(project => <Project key={project.id} project={project} />) } 
      </div>
    </section>
  )
}