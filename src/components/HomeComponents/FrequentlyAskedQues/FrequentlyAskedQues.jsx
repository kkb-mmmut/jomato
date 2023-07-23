import css from './FrequentlyAskedQues.module.css';
import CollapsableCard2 from '../../../utils/Cards/CollapsableCard2/CollapsableCard2'

let FrequentlyAskedQues = () => {
    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.title}>Frequently asked questions</div>
            <div className={css.cards}>
                <CollapsableCard2 title="What will Jomato for its subcription?" content="Subcribing a restaurant page on Jomato is free of cost." />
                <CollapsableCard2 title="What will Jomato charge me for creating a page on its platform?" content="Creating a restaurant page on Jomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges." />
            </div>
        </div>
    </div>
}

export default FrequentlyAskedQues;