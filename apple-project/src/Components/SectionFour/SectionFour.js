import styles from "./SectionFour.module.css"
import watch from "../../Resources/icons/watch-series5-logo.png"
import card from "../../Resources/icons/apple-card-logo.png"
function SectionFour() {
    return (
        <>
            <div className={styles.sectionFourContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.iconContainer}>
                        <img src={watch} alt="watch series"/>
                        <p className={styles.productDesc}>With the new Always-On Retina display.
                        You’ve never seen a watch like this.</p>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                <div className={styles.iconContainer}>
                        <img src={card} alt="apple card logo"/>
                        <p className={styles.productDesc}>Get 3% Daily Cash on purchases from Apple using Apple Card.</p>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionFour