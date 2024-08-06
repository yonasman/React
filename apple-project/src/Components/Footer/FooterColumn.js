
function FooterColumn(props) {
    return (
        <>
            <div>
                {
                    props.data.map((ele,i) => 
                        {
                            return (
                                <div key={i}>
                                    <h1>{ele.title}</h1>
                                    {
                                        ele.links.map(({text,url},i) => {
                                            return(
                                                <div key={i}>
                                                    <a href={url}>{text}</a>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            )
                    }
                )
                }
            </div>
        </>
    )
}
export default FooterColumn