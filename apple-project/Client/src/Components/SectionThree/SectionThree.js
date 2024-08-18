import styles from "./SectionThree.module.css"
function SectionThree() {
    return (
        <>
            <div className={styles.sectionThreeContainer}>
                <div className={styles.bgContainer}>
                    <div className={styles.textContainer}>
                        <p className={styles.brandName}>iPhone 11</p>
                        <p className={styles.desc}>Just the right amount of everything.</p>
                        <p className={styles.price}>From $16.62/mo. or $399 with trade‑in.</p>
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
export default SectionThree