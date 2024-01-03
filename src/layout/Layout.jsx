import Footer from "./Footer/Footer";
import Header from "./Navbar/Navbar";
// import AnimateBackground from "../components/AnimateBackground";

import styles from './layout.module.css'

// eslint-disable-next-line react/prop-types
function Layout ({ children }) {

  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout