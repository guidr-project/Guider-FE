import React from "react";
import "semantic-ui-css/semantic.min.css";

function UserCard(props) {
    console.log(props)
    return (
        <div>
            
            <div className="ui grid">
                <div className="row">
                    <div className="ui card four column wide">
                    <div className="content" key={props.id}>
                        <div className="header">Trip: {props.title}</div>
                        <div className="meta">Start Date: {props.startDate}</div>
                        <div className="meta">End Date: {props.endDate}</div>
                        <div className="description">
                        <p>
                            {props.description}
                        </p>
                        </div>
                        <div className="meta">{props.type}</div>
                    </div>
                    <div className="extra content">
                        <button className="ui blue button">Edit</button>
                        <button className="ui red button">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;