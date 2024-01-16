import FormContact from "./FormContact/FormContact";
import styles from './contact.module.css'

export default function Contact () {
  return(
    <section className={styles.section}>
      <h2>Contacto</h2>
      <p>
        Ante cualquier duda no dudes en dejar tu mensaje o 
        contactarme a través de cualquiera de mis redes sociales.
      </p>
      <FormContact />
    </section>
  )
}