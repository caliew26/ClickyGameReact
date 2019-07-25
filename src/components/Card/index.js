import React from "react";


const CardTile= props => {
    return(
        <div className="container" >
            {/* onClick={()=>props.scoreIncrease(props.id)} */}
            <div className="image">
                <img alt={props.alt} src={require("../../Images/" + props.images)} />
            </div>
        </div>
    )
}

export default CardTile;