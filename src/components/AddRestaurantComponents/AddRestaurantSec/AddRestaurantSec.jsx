
import bgImg from '/images/addressbackground.jpg'

import css from './AddRestaurantSec.module.css';
 

let AddRestaurantSec = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.imgBox}>
                <img className={css.img} src={bgImg} alt="background image" />
            </div>
            <div className={css.overlayDiv}>
                <div className={css.sec1}>
                    <div className={css.title}>
                        Cannot find your favourite restaurant on Jomato?
                    </div>
                    <div className={css.tag}>
                        Submit the details and our team will get the restaurant onboard
                    </div>
                </div>
                <div className={css.sec2}> 
                </div>
            </div>
        </div>
    </div>
}

export default AddRestaurantSec;