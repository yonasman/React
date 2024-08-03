import styles from "./SectionOne.module.css"

function SectionOne() {
    return (
    <>
        <div className={styles.sectionOneContainer}>
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
            <hello>Hello</hello>
        </div>
    </>)
}
export default SectionOne