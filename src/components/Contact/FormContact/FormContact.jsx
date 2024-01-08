import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import styles from './formContact.module.css'

export default function FormContact () {
  const navigate = useNavigate()

  const handleSubmit = evt => {
    evt.preventDefault()
    emailjs.sendForm('service_sv0jp89', 'template_n20mq6l', evt.target, 'WKkILWfxeVGkx-IlY')
      .then(res => {
        if(res.text === 'OK') {
          setTimeout(() => {
            navigate('/')
          }, 2000)
        }
      })
      .catch(err => console.log(err.text))
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} >
        <label>
          <input autoComplete="off" name='user'  type='text' placeholder='Nombre'/>
        </label>
        <label>
          <input autoComplete="off" name='email' type='email' placeholder='Email'/>
        </label>
        <label>
          <span>Mensaje</span>
          <textarea autoComplete="off" name='message' placeholder='¿En qué puedo ayudarte?'/>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  )
}