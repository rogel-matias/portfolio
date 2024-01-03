// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom'
import styles from './about.module.css'

function About () {
  return(
    <section className={styles.section}>
      <h2>Sobre mi</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Apasionado de la informática, tecnología y programación con 27 años 
            de Entre Ríos, Argentina. Desde el 2021, la programación se ha 
            convertido en el eje central de mi vida profesional.
          </p>
          <p> 
            Estoy en búsqueda de oportunidades laborales y proyectos que me 
            permitan aplicar mis habilidades de programación y contribuir 
            al mundo tecnológico. Mi experiencia como técnico de computadoras 
            complementa mi perfil. 
          </p>
          <p> 
            En mi tiempo libre, disfruto entrenar, compartir momentos con mis amigos de cuatro patas y sumergirme en el mundo de los videojuegos.
          </p>
          <p>
            ¡No dudes en <Link to='/contact'><span>contactarme</span></Link> ante cualquier pregunta o propuesta! 
          </p>
        </div>
        <div className={styles.aside}>
          <img src="/assets/about/my-photo.webp"/>
          <button>MI CV</button>
        </div>
      </div>
    </section>
  )
}

export default About