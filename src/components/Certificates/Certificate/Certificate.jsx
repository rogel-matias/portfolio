import styles from './certificate.module.css'

function Certificate ({ certificate, currentImage, index }) {
  return (
    <div className={styles.container}> 
      <article className={
							currentImage === index
								? `${styles.slide} ${styles.active}`
								: styles.slide
              } 
      >
        {
          currentImage === index && (
            <img src={certificate} alt='AGREGAR' />
          )
        }
      </article>
    </div>
  )
}

export default Certificate