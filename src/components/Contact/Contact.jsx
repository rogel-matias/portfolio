import FormContact from "./FormContact/FormContact";
import styles from './contact.module.css'

export default function Contact ({title, text}) {
  return(
    <section className={styles.section}>
      <div className={styles.contain}> 
        <h2>{title}</h2>
        <p>{text}</p>
        <FormContact />
      </div>
    </section>
  )
}