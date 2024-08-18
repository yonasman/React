import logo from "../../Resources/icons/logo.png"
import search from "../../Resources/icons/search-icon.png"
import cart from "../../Resources/icons/cart.png"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return(
        <>
            <div className={styles.headerContainer}>
                <ul>
                    <li><Link to="https://www.apple.com/"><img src={logo} alt="logo"/></Link></li>
                    <li><Link to="/mac">Mac</Link></li>
                    <li><Link to="/iphone">iPhone</Link></li>
                    <li><Link to="/ipad">iPad</Link></li>
                    <li><Link to="/watch">watch</Link></li>
                    <li><Link to="/tv">tv</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/support">Support</Link></li>
                    <li><Link to="/search"><img src={search} alt="search icon"/></Link></li>
                    <li><Link to="/cart"><img src={cart} alt="cart icon"/></Link></li>
                </ul>
            </div>
        </>
    )
}
export default Header