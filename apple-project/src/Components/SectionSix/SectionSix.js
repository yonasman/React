import styles from "./SectionSix.module.css"
import ipad from "../../Resources/icons/new-ipad-logo.png"
function SectionSix() {
    return (
        <>
            <div className={styles.sectionSixContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.textContainer}>
                        <p className={styles.modelText}>16-inch model</p>
                        <p className={styles.brandName}>MacBook Pro</p>
                        <p className={styles.desc}>The best for the brightest.</p>
                        <div className={styles.links}>
                            <a href="#">Learn more {'>'}</a>
                            <a href="#">Buy {'>'}</a>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                    </div>
                </div>  
                <div className={styles.rightContainer}>
                <div className={styles.iconContainer}>
                        <img src={ipad} alt="new ipad logo"/>
                        <p className={styles.productDesc}>Like a computer. Unlike any computer.</p>
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
export default SectionSix