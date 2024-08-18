import styles from "./SectionTwo.module.css"

function SectionTwo() {
    return (
        <>
            <div className={styles.sectionTwoContainer}>
                <div className={styles.bgContainer}>
                    <div className={styles.textContainer}>
                    <p className={styles.brandName}>iPhone 11 Pro</p>
                    <p className={styles.desc}>Pro cameras. Pro display. Pro performance</p>
                    <p className={styles.price}>From $24.95/mo. or $599 with trade‑in.</p>
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
export default SectionTwo