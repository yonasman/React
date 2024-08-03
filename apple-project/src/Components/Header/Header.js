import logo from "../../Resources/icons/logo.png"
import search from "../../Resources/icons/search-icon.png"
import cart from "../../Resources/icons/cart.png"
import styles from "./Header.module.css"

function Header() {
    return(
        <>
            <div className={styles.headerContainer}>
                <ul>
                    <li><a href="https://www.apple.com/"><img src={logo} alt="logo"/></a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#"><img src={search} alt="search icon"/></a></li>
                    <li><a href="#"><img src={cart} alt="cart icon"/></a></li>
                </ul>
            </div>
        </>
    )
}
export default Header