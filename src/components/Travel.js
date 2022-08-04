import React from "react"
import pin from "../images/pin.png"

export default function Travel(props) {

return(
    <div className="travel-container"> 
        <img className="travel-img" src={props.item.imageUrl} alt="travel-img"/>
        <div className="travel-info">
            <img className="pin" src={pin} alt="pin-logo"/>
            <span className="travel-location">{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h1 className="travel-title">{props.item.title}</h1>
        <h2 className="travel-date">{props.item.startDate}-{props.item.endDate}</h2>
        <p className="travel-description">{props.item.description}</p>
        </div>
    </div>
)
}