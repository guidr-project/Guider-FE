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
                        <div class="header">Title</div>
                        <div class="meta">Date</div>
                        <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat accumsan, 
                            egestas mi sit amet, posuere purus. Nulla vitae neque ut ex bibendum iaculis a ut erat. 
                            Etiam varius hendrerit sodales. Curabitur laoreet nisi mi. Cras volutpat neque urna.
                            Nullam eu metus non tortor porttitor tincidunt vitae in lacus.
                        </p>
                        </div>
                    </div>
                    <div class="extra content">
                        <button class="ui blue button">Edit</button>
                        <button class="ui red button">Delete</button>
                    </div>
                    </div>
                    
                    <div class="ui card four column wide">
                    <div class="content">
                        <div class="header">Title</div>
                        <div class="meta">Date</div>
                        <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat accumsan, 
                            egestas mi sit amet, posuere purus. Nulla vitae neque ut ex bibendum iaculis a ut erat. 
                            Etiam varius hendrerit sodales. Curabitur laoreet nisi mi. Cras volutpat neque urna.
                            Nullam eu metus non tortor porttitor tincidunt vitae in lacus.
                        </p>
                        </div>
                    </div>
                    <div class="extra content">
                        <button class="ui blue button">Edit</button>
                        <button class="ui red button">Delete</button>
                    </div>
                    </div>

                    <div class="ui card four column wide">
                    <div class="content">
                        <div class="header">Title</div>
                        <div class="meta">Date</div>
                        <div class="description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat accumsan, 
                            egestas mi sit amet, posuere purus. Nulla vitae neque ut ex bibendum iaculis a ut erat. 
                            Etiam varius hendrerit sodales. Curabitur laoreet nisi mi. Cras volutpat neque urna.
                            Nullam eu metus non tortor porttitor tincidunt vitae in lacus.
                        </p>
                        </div>
                    </div>
                    <div class="extra content">
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