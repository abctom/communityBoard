import React from "react";

const Park = (props) => {
    return(
    <td className= {'Park ' + props.color}>
        <h5>{props.park}</h5>
        <h6>{props.location}</h6>
        <a href={props.site} target ="_blank">here</a>

        
    </td>
    );
};

export default Park;