
import "../Breadcrumbs/breadcrumbs.css"

const Breadcrumbs = (props) => {
  return (
    <>
           <div className="inner-banner-wrap">
                <div className="inner-baner-container" >
                    <div className="container">
                        <div className="inner-banner-content">
                            <h1 className="page-title fs-1">{props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
    </>
  )
}

export default Breadcrumbs