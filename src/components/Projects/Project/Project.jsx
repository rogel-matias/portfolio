import ExternalLinkIcon from '../../../assets/icons/ExternalLinkIcon'
import GithubIcon from '../../../assets/icons/GithubIcon'
import styles from './project.module.css'

function Project ({ project }) {
  console.log(project.description.icons)
  return (
    <article className={styles.article}>
      <div className={styles.contain}>
        <div className={styles.title}>
          <h4>{project.title}</h4> 
          <a href={project.url.deploy} target="_blank" rel="noreferrer"><ExternalLinkIcon /></a>
        </div>
        <p>{project.description.text}</p>
        <ul>
          <div>
            {
              project.description.icons.map(icon => {
                if(icon === undefined) return
                return (
                <li key={icon['alt']}>
                  <img alt={icon['alt']} src={icon['svg']}/>
                </li>
                )
              })
            }
          </div>
          {
          project.url.github 
            ? <a href={project.url.github} target="_blank" rel="noreferrer">
              <GithubIcon />
            </a> 
            : null
          }
        </ul>
      </div>      
      <img className={styles.imgProject} src={project.img.webp} alt={project.img.alt} />
    </article>
  )
}

export default Project