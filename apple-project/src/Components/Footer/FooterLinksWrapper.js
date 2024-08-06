import footerData from "../../Resources/Data/footerData"
import FooterColumn from "./FooterColumn"

function FooterLinksWrapper() {
    return(
        <>
             {
                    footerData.map((section,i) => {
                        return (
                            
                            <div key={i}>
                                <FooterColumn data={section}/>
                            </div>

                        )
                    })
                }
        </>
    )
}
export default FooterLinksWrapper