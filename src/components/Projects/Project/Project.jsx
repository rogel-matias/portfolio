import ExternalLinkIcon from '../../../assets/icons/ExternalLinkIcon'
import GithubIcon from '../../../assets/icons/GithubIcon'
import styles from './project.module.css'

function Project ({ project }) {
  return (
    <article className={styles.article}>
      <div className={styles.contain}>
        <div className={styles.title}>
          <h4>{project.title}</h4> 
          <a href={project.url.deploy} target="_blank" rel="noreferrer"><ExternalLinkIcon /></a>
        </div>
        <p>{project.description.text}</p>
        <a href={project.url.github} target="_blank" rel="noreferrer"><GithubIcon /></a>
      </div>    
      <img src={project.img.webp} alt={project.img.alt} />
    </article>
  )
}

export default Project