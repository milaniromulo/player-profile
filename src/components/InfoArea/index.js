import React from 'react'
import "./index.css"

const InfoArea = (props) => {
    return (
        <div className="infos-area">
            <div className="profile-image">
                <img src={props.data.image} alt={props.data.firstName} />
                
            </div>
            <div className="profile-infos">
                <h3>
                    {props.data.firstName} <br/>
                    <strong>{props.data.lastName}</strong>
                </h3>
                <ul className="team-info">
                    <li>
                        <img src={props.data.teamImage} alt={props.data.teamName} />
                        <span>{props.data.teamName}</span>
                    </li>
                    <li>#{props.data.number}</li>
                    <li>{props.data.position}</li>
                </ul>
                
                <ul className="player-info">
                    <li>
                        <span className="info">Nasc.</span>
                        <span className="value">{props.data.birthDate} ({props.data.age})</span>
                    </li>
                    <li>
                        <span className="info">A/P</span>
                        <span className="value">{props.data.height} m | {props.data.weight} kg</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default InfoArea;
