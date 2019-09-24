import React from "react";
import "semantic-ui-css/semantic.min.css";

function UserCard() {
    return (
        <div class="ui raised card">
            <div class="content">
                <div class="header">Trip</div>
                <div class="meta">
                <span class="category">Date</span>
                </div>
                <div class="description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut turpis cursus, fermentum neque ut, dignissim magna. 
                    Vivamus pharetra nibh tincidunt mi porta malesuada. Suspendisse vitae lorem placerat, finibus est a, feugiat neque.
                    Quisque nisi sem, pellentesque in ullamcorper ut, auctor at neque. Fusce sit amet tellus ac eros hendrerit fringilla. 
                    Ut sodales laoreet imperdiet. Morbi egestas, turpis ut aliquet suscipit, quam mi ultricies lorem, 
                    vitae molestie lectus est et nisi.
                </p>
                </div>
            </div>
            <div class="extra content">
                {/* <div class="right floated author">
                    <img class="ui avatar image" src="/images/avatar/small/matt.jpg"/>
                </div> */}
            </div>
            <div class="description">
                <p>Added by: Billy Baney</p>
            </div>
            <button class="ui primary button">
                Edit
            </button>
            <button class="ui button">
                Discard
            </button>
        </div>
    )
}

export default UserCard;