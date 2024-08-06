import styles from "./Footer.module.css"
import flag from "../../Resources/icons/flag.png"
import FooterLinksWrapper from "./FooterLinksWrapper"
function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContentWrapper}>
                <div className={styles.topText}>
                    <p>
                    1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. Full terms apply.
                    </p>
                </div>
                {/* {
                    footerData.map((section,i) => {
                        return (
                            <div className={styles.linksContainer}>
                                <FooterLinksWrapper/>
                                <div className={styles.multipleLinksCont}>
                            </div>
                            </div>
                        )
                    })
                } */}
                        {/* <div>
                        <h1>Services</h1>
                            <a href="#">Apple Music</a>
                            <a href="#">Apple News+</a>
                            <a href="#">Apple TV+</a>
                            <a href="#">Apple Arcade</a>
                            <a href="#">Apple Card</a>
                            <a href="#">iCloud</a>
                        </div>
                        <div>
                        <h1>Account</h1>
                            <a href="#">Account</a>
                            <a href="#">Manage Your Apple ID</a>
                            <a href="#">Apple Store Account</a>
                            <a href="#">iCloud.com</a>
                        </div> */}
                    {/* </div>
                    <div>
                        <h1>Apple Store</h1>
                            <a href="#">Find a Store</a>
                            <a href="#">Genius Bar</a>
                            <a href="#">Today at Apple</a>
                            <a href="#">Apple Camp</a>
                            <a href="#">Field Trip</a>
                            <a href="#">Apple Store App</a>
                            <a href="#">Refurbished and Clearance</a>
                            <a href="#">Financing</a>
                            <a href="#">Apple Trade In</a>
                            <a href="#">Order Status</a>
                            <a href="#">Shopping Help</a>
                    </div>
                    <div className={styles.multipleLinksCont}>
                        <div>
                        <h1>For Business</h1>
                            <a href="#">Apple and Business</a>
                            <a href="#">Shopping Help</a>
                        </div>
                        <div>
                        <h1>For Education</h1>
                            <a href="#">Apple and Education</a>
                            <a href="#">Shop for College</a>
                        </div>
                        <div>
                        <h1>For Healthcare</h1>
                            <a href="#">Manage Your Apple ID</a>
                            <a href="#">Apple Store Account</a>
                            <a href="#">iCloud.com</a> 
                        </div>
                        <div>
                            <h1>For Government</h1>
                            <a href="#">Apple and Education</a>
                            <a href="#">Shop for College  </a>
                        </div>
                    </div>
                    <div className={styles.multipleLinksCont}>
                        <div>
                        <h1>Apple Values</h1>
                            <a href="#">Find a Store</a>
                            <a href="#">Genius Bar </a>
                            <a href="#">Today at Apple</a>
                            <a href="#">Apple Camp </a>
                            <a href="#">Field Trip</a>
                            <a href="#">Apple Store App </a>
                        </div>
                        <div>
                        <h1>About Apple</h1>
                            <a href="#">Find a Store</a>
                            <a href="#">Genius Bar </a>
                            <a href="#">Today at Apple</a>
                            <a href="#">Apple Camp </a>
                            <a href="#">Field Trip</a>
                            <a href="#">Apple Store App </a>
                        </div> */}
                {/* footer links by props */}
                <div className={styles.linksContainer}>
                    <FooterLinksWrapper/>
                </div>
                <div className={styles.bottomParagraph}>
                    <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</p>
                </div>
                <div className={styles.bottomLinks}>
                    <p>Copyright © 2019 Apple Inc. All rights reserved.</p>
                    <div className={styles.privacyLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Sales and Refunds</a>
                        <a href="#">Legal</a>
                        <a href="#">Site Map</a>
                    </div>
                    <div className={styles.flagContainer}> 
                        <img src={flag} />
                        <p>United States</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Footer