import { useState } from 'react'
import { data } from '../../data/data.js'
import Certificate from './Certificate/Certificate.jsx'
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon.jsx'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon.jsx'
import styles from './certificates.module.css'

function Certificates () {
  const { certificates } = data
  
  const [currentImage, setCurrentImage] = useState(0)
  const quantity = certificates?.length
  console.log(quantity, currentImage)
  
  // Return temprano evitando problemas
  if (!Array.isArray(certificates) || certificates.length === 0) return;

  const nextImage = () => {
    setCurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1)
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1)
  }
  
  return(
    <section className={styles.section}>
      <h2>Certificates</h2>
      <div className={styles.slider}>
        <button onClick={prevImage}><ArrowLeftIcon/></button>
        <div>
          {
            certificates.map((certificate, index) => (
              <Certificate
                key={index} 
                index={index}
                certificate={certificate}
                currentImage={currentImage}
              />
            ))
          }
        </div>
        <button onClick={nextImage}><ArrowRightIcon/></button>
      </div>
    </section>
  )
}

export default Certificates;