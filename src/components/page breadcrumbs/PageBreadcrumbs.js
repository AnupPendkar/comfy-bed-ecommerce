import { useLocation } from "react-router-dom";
import "./page-breadcrumbs.css";
function PageBreadcrumbs({name}) {
    const location = useLocation().pathname.split('/')[1];
    return (  
        <div className="pageBreadcrumbs">
            <div className="width-container">
                <h2 className="page-title">Home / <span>{location} {name && ` / ${name}`}</span></h2>
            </div>
        </div>
    );
}

export default PageBreadcrumbs;