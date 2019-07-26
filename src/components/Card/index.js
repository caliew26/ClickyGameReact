import React from "react";
import  "./style.css";


function CardTile(props) {
    return(
        <div className="container card" >
            <div className="image col-sm">
                <img alt={props.alt} src={require("../../Images/" + props.images)} />
            </div>
        </div>
    )
}

export default CardTile;