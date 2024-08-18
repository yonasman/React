import styles from "./SectionFive.module.css"
import tv from "../../Resources/icons/apple-tv-logo.png"
import servant from "../../Resources/icons/servant-logo.png"
import NotStartedIcon from '@mui/icons-material/NotStarted';

function SectionFive() {
    return (
        <>
            <div className={styles.sectionFiveContainer}>
                <div className={styles.leftContainer}>
                    {/* tv container */}
                    <div className={styles.iconContainer}>
                        <img src={tv} alt="apple tv logo"/>
                    </div>
                    <div className={styles.servantContainer}>
                        <img src={servant} alt="servant logo"/>
                    </div>
                    <div className={styles.trailer}>
                        <a href="#">Watch the trailer</a>
                        <a href="#"><NotStartedIcon/></a>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.iconContainer}>
                        <p className={styles.brandName}>AirPods Pro</p>
                        <p className={styles.productDesc}>Magic like you’ve never heard.</p>
                    </div>
                    <div className={styles.links}>
                        <a href="#">Learn more {'>'}</a>
                        <a href="#">Buy {'>'}</a>
                    </div>
                    <div className={styles.airPodContainer}>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionFive