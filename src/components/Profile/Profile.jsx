import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

function Profile() {
  return (
    <div className={classes.content}>
      <div className={classes.content__bgImg}>
        <img
          className={classes["content__bgImg--img"]}
          src="https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg"
        />
      </div>
      <div className={classes.content__profile}>
        <div className={classes["content__profile--img"]}>
          <img src="https://rolshtory-minsk.by/wp-content/uploads/2015/08/team_member4.jpg" />
        </div>
        <div className={classes["content__profile--about"]}>
          <ul>
            <li>First Name: Niyozbek</li>
            <li>Last Name: Niyozbek</li>
            <li>Birth Date: 12.03.2004</li>
            <li>Country: Uzbekistan</li>
            <li>Job: Web-developer</li>
          </ul>
        </div>
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
