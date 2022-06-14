import React from "react";
import './Location.css'
const InfoLocation = ({Location}) => {
return(
    <article>
        <h2>{Location?.name}</h2>
        <img src={Location?.image}/>
        <ul>
            <li className="description"><span>Type:</span> {Location?.type}</li>
            <li className="description"><span>Dimension:</span> {Location?.dimension}</li>
            <li className="description"><span>Population:</span> {Location?.residents.length}  </li>
            
    </ul>
    </article>
)}
export default InfoLocation




