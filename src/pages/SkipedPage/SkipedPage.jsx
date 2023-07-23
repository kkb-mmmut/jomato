import css from './SkipedPage.module.css'

import { useNavigate } from "react-router-dom";

const SkipedPage = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  }

  return (
    <div className={css.outerDiv}>
      <div className={css.innerDiv}>
        <h1>Get me a Cup of Tea, then I will develop this page for you!</h1>
        <div onClick={goBackHandler} className={css.backBtn}>Go Back</div>
      </div>
    </div>
  )
}

export default SkipedPage