import React from "react";
import { imageUrl } from "../services/movieServices";

const PageMap = (props) => {
    

    return (
        <div className="page-map-container">
            <img 
                className={props.passClass} 
                src={`${imageUrl(props.pathUrl, props.width)}`} 
                alt="test" 
            />
            { props.castName && <p className="page-map-name">{props.castName}</p> }
        </div>
    )
}

export default PageMap;