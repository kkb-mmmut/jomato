import css from './ErrorPage.module.css'
import Navbar2 from '../../components/Navbars/NavigationBar2/NavigationBar2' 
import Footer from '../../components/Footer/Footer'
const ErrorPage = () => {
  return (
    <div className={css.outerDiv}>
      <Navbar2/>
      <div className={css.innerDiv}>  
        <h1>Get me a Cup of Tea, then I will develop this page for you!</h1> 
      </div>
    </div>
  )
}

export default ErrorPage