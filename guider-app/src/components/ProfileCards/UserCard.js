import React from "react";
import "semantic-ui-css/semantic.min.css";

function UserCard(props) {
    return (
        <div class="card-container">
            <img className="forest" img src="https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt="woods"/>
            <div class="ui grid">
                <div class="row">
                    <div class="ui card four column wide">
                    <div class="content">
                        <div class="header">{props.tripName}</div>
                        <div class="meta">{props.date}</div>
                        <div class="description">
                        <p>
                            {props.description}
                        </p>
                        </div>
                    </div>
                    <div class="extra content">
                        <div class="description">
                            <p>
                                Edited by: 
                            </p>
                        </div>
                        <button class="ui blue button">Edit</button>
                        <button class="ui red button">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;